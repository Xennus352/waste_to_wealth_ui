import { Send } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useCreateProduct } from "@/react-query/market/market";

const CreateProductCard = ({ onPostSubmit }: { onPostSubmit: () => void }) => {
  // create post
  const { mutate } = useCreateProduct();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const postData = {
      title: formData.get("title"),
      description: formData.get("description"),
      type: formData.get("type"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
    };
    mutate(postData);
    onPostSubmit(); // Close the dialog after successful submission
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
              <div className="p-4 rounded-md flex md:h-70 lg:h-70 xl:h-70 items-center justify-center flex-grow">
                <Input type="file" />
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
                <Input
                  name="description"
                  placeholder="Description"
                  className="whitespace-pre-wrap border-slate-500 border-t-0 w-full"
                ></Input>
                <div className="grid grid-cols-2 gap-2">
                  {/* price  */}
                  <Input
                    name="price"
                    placeholder="Price"
                    className="whitespace-pre-wrap border-slate-500 border-t-0 w-full"
                  ></Input>
                  {/* quantity */}
                  <Input
                    name="quantity"
                    placeholder="Quantity"
                    className="whitespace-pre-wrap border-slate-500 border-t-0 w-full"
                  ></Input>
                </div>

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

export default CreateProductCard;
