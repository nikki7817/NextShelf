
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { FormValues } from "./schema";
import { toast } from "sonner";

export const useBookUpload = (onSuccess?: () => void) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: FormValues, userId: string) => {
    console.log("useBookUpload: starting submission", { values, userId });
    setIsSubmitting(true);
    
    try {
      // Ensure all required fields from the database schema are present
      const listingData = {
        subject_name: values.subject_name,
        condition: values.condition,
        price: values.price,
        owner_name: values.owner_name,
        contact_number: values.contact_number,
        email: values.email,
        semester: values.semester,
        batch: values.batch,
        user_id: userId,
      };

      console.log("useBookUpload: inserting data", listingData);
      
      // Insert data and return the created row
      const { error, data } = await supabase
        .from("book_listings")
        .insert(listingData)
        .select()
        .single();
      
      console.log("useBookUpload: insert response", { error, data });

      if (error) {
        console.error("Supabase insert error:", error);
        toast.error(`Database error: ${error.message}`);
        throw error;
      }

      console.log("Book listing created successfully:", data);
      toast.success("Book listing created successfully");
      
      if (onSuccess) {
        console.log("useBookUpload: calling onSuccess callback");
        setTimeout(() => {
          onSuccess();
        }, 100);
      }
      
      return true;
    } catch (error: any) {
      console.error("useBookUpload error:", error);
      toast.error("Error creating listing: " + (error.message || "Unknown error"));
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleSubmit,
    isSubmitting
  };
};
