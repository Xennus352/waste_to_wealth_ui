import RichTextEditor from "@/components/rich-text-editor/RichTextEditor";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCreatePost } from "@/react-query/post/post";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateNewPost = () => {
  const navigate = useNavigate();

  const { mutate: createPost } = useCreatePost();

  const [title, setTitle] = useState("");
  const [contentEnglish, setContentEnglish] = useState("");
  const [contentBurmese, setContentBurmese] = useState("");
  const [type, setType] = useState("");

  const rawData = {
    title,
    contentBurmese,
    contentEnglish,
    type,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPost(rawData, {
      onSuccess: () => {
        toast.success("Post created successfully!"), navigate(-1);
      },
      onError: () => {
        toast.error("Something went wrong!");
      },
    });
  };

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
              <div className="">
                Content Title
                <RichTextEditor content={title} onChange={setTitle} />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 ">
            <div className="">
              Content in English
              <RichTextEditor
                content={contentEnglish}
                onChange={setContentEnglish}
              />
            </div>
            <div className=" ">
              Content in Burmese
              <RichTextEditor
                content={contentBurmese}
                onChange={setContentBurmese}
              />
            </div>
            <div className=" ">
              Type
              <RichTextEditor content={type} onChange={setType} />
            </div>
          </CardContent>
          <CardFooter className="self-end">
            <div>
              <Button
                type="submit"
                variant={"outline"}
                className="cursor-pointer"
              >
                Update
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default CreateNewPost;
