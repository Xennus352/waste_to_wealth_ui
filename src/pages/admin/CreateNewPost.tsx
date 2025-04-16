import RichTextEditor from "@/components/rich-text-editor/RichTextEditor";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useCreatePost } from "@/react-query/post/post";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateNewPost = () => {
  const navigate = useNavigate();

  const [base64Image, setBase64Image] = useState<string | null>(null);

  const { mutate: createPost } = useCreatePost();

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

  // form submition update
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
        image: base64Image,
        contentEnglish: formData.get("contentEnglish"),
        contentBurmese: formData.get("contentBurmese"),
        type: formData.get("type"),
      };
      createPost(postData, {
        onSuccess: () => {
          toast.success("Post updated Successfully!");
          navigate(-1);
        },
        onError: () => {
          toast.error("Failed to update");
        },
      });
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
    <div>
      <div className="flex items-center justify-between m-2">
        <div className="font-bold text-2xl text-slate-500">Create new Post</div>
        <div
          onClick={() => navigate(-1)}
          className={`font-bold text-2xl cursor-pointer text-slate-500 ${buttonVariants(
            {
              variant: "outline",
            }
          )}`}
        >
          Go Back
        </div>
      </div>

      <Separator className="mb-2" />

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="title" className="mb-1">
                    Post Title
                  </Label>
                  <Input name="title" />
                </div>
                <div className=" flex items-center justify-between gap-3">
                  <div>
                    {/* Category Select */}
                    <Select name="type">
                      <SelectTrigger className="w-44 p-1 border-slate-500 hover:cursor-pointer">
                        <SelectValue placeholder="Choose the post type" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem
                            key={category.value}
                            value={category.value}
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-3 ">
            <div>
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
            <div className="whitespace-pre-wrap ">
              {" "}
              <Label htmlFor="english" className="mb-1">
                Post Content in English
              </Label>
              <Textarea
                name="contentEnglish"
                className="whitespace-pre-wrap"
                id="english"
              />
            </div>
            <div className="whitespace-pre-wrap ">
              <Label htmlFor="burmese" className="mb-1">
                Post Content in Burmese
              </Label>
              <Textarea
                name="contentBurmese"
                className="whitespace-pre-wrap"
                id="burmese"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end mt-2">
            <div>
              <Button
                type="submit"
                variant={"outline"}
                className="cursor-pointer"
              >
                Create
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default CreateNewPost;
