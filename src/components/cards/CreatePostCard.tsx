import { Send } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useCreatePost } from "@/react-query/post/post";
import { useState } from "react";
import { toast } from "sonner";

const CreatePostCard = ({ onPostSubmit }: { onPostSubmit: () => void }) => {
  // create post
  const { mutate } = useCreatePost();

  const [base64Image, setBase64Image] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result as string);
        // console.log("Base64 Image:", reader.result); // You can POST this to an API
      };
      reader.readAsDataURL(file); // This converts it to base64
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const file = formData.get("image") as File;

    const toBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
      });
    };

    try {
      const base64Image = file ? await toBase64(file) : null;

      const postData = {
        title: formData.get("title"),
        contentBurmese: formData.get("contentBurmese"),
        image: base64Image,
        type: formData.get("type"),
      };

      mutate(postData, {
        onSuccess: () => {
          toast.success("Created Successfully");
        },
        onError: () => {
          toast.error("Something Went Wrong!");
        },
      });
      onPostSubmit(); // Close the dialog after successful submission
    } catch (error) {
      console.log("Error converting image to base64:", error);
    }
  };

  // category list
  const categories = [
    {
      value: "ground",
      name: "Ground",
    },
    {
      value: "plastic",
      name: "Plastic",
    },
    {
      value: "tire",
      name: "Tire",
    },
    {
      value: "paper",
      name: "Paper",
    },
    {
      value: "food",
      name: "Food",
    },
    {
      value: "other",
      name: "Other",
    },
  ];

  return (
    <>
      <Card className="p-1">
        <form className="h-full" onSubmit={handleSubmit}>
          <div className="flex flex-col rounded-md md:flex-row lg:flex-row xl:flex-row justify-between h-full p-2">
            {/* Left side: Image placeholder */}
            <div
              className="md:mr-4 md:w-1/3 lg:mr-4 lg:w-1/3
              border-b md:border-b-0 lg:border-b-0 md:border-r lg:border-r p-2 h-full
              border-slate-500 flex flex-col"
            >
              <div className="p-4 rounded-md cursor-pointer  flex md:h-70 lg:h-70 xl:h-70 items-center justify-center flex-grow">
                <label
                  htmlFor="postImg"
                  className={`${
                    base64Image ? "cursor-pointer hidden" : "cursor-pointer"
                  }`}
                >
                  Upload photo
                </label>
                <Input
                  name="image"
                  className="hidden"
                  id="postImg"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {base64Image && (
                  <img
                    src={base64Image}
                    alt="Preview"
                    className="mt-4 max-h-40 rounded"
                  />
                )}
              </div>
            </div>
            {/* Right side: Form */}
            <div className="flex-grow mt-4 lg:mt-0">
              <div className="flex flex-col space-y-4">
                {/* Title Input */}
                <Input
                  name="title"
                  type="text"
                  placeholder="Title"
                  className="border-slate-500 border-t-0 w-full"
                />

                {/* Category Select */}
                <Select name="type">
                  <SelectTrigger className="w-full border-slate-500 border-t-0">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Description Textarea */}
                <Textarea
                  name="contentBurmese"
                  placeholder="Description"
                  className="whitespace-pre-wrap border-slate-500 border-t-0 w-full h-40"
                ></Textarea>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-slate-500 text-white cursor-pointer"
                    variant={"outline"}
                  >
                    Post <Send />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
};

export default CreatePostCard;
