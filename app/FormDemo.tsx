"use client";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { DependencyType } from "@/components/ui/auto-form/types";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DbAutoForm } from "@/prisma-react-component/forms/DbAutoForm";
import * as z from "zod";


export function FormDemo() {
  return (
    <div className="mx-8">
      <h3>USER</h3>
      <DbAutoForm modelName="User" action="create" />
    </div>
  );
}
