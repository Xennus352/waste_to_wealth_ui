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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useGetSinglePost, useUpdatePost } from "@/react-query/post/post";
import Loading from "@/utils/Loading";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { mutate: updatePost } = useUpdatePost();

  const {
    data: singlePost,
    isLoading,
    isError,
  } = useGetSinglePost(id as string);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h2>Something went wrong!</h2>;
  }
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

  // form submition update
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const postData = {
      id: singlePost.id,
      title: formData.get("title"),
      image: formData.get("image"),
      contentEnglish: formData.get("contentEnglish"),
      contentBurmese: formData.get("contentBurmese"),
      isApproved: formData.get("isApproved") == "true" ? true : false,
      type: formData.get("type"),
    };
    updatePost(postData, {
      onSuccess: () => {
        toast.success("Post updated Successfully!");
      },
      onError: () => {
        toast.error("Failed to update");
      },
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between m-2">
        <div className="font-bold text-2xl text-slate-500">Post Details</div>
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
                  <Input name="title" defaultValue={singlePost.title} />
                </div>
                <div className=" flex items-center justify-between gap-3">
                  <div>
                    {/* Category Select */}
                    <Select name="type" defaultValue={singlePost.type}>
                      <SelectTrigger className="w-24 p-1 border-slate-500 hover:cursor-pointer">
                        <SelectValue placeholder={singlePost.type} />
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

                  <div>
                    <Select
                      name="isApproved"
                      defaultValue={singlePost.isApproved ? "true" : "false"}
                    >
                      <SelectTrigger
                        className={`w-30 cursor-pointer ${
                          singlePost.isApproved
                            ? "border-sky-500 hover:bg-sky-500 hover:text-white"
                            : "border-red-500 text-red-600"
                        }`}
                      >
                        <SelectValue
                          className="cursor-pointer"
                          placeholder={
                            singlePost.isApproved ? "Published" : "Draft"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem className="cursor-pointer" value="true">
                          Published
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="false">
                          Draft
                        </SelectItem>
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
                <img
                  src={singlePost?.picture}
                  alt="Preview"
                  className="mt-4 max-h-40 rounded"
                />
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
                defaultValue={singlePost.contentEnglish}
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
                defaultValue={singlePost.contentBurmese}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end mt-2">
            <div>
              <Button variant={"outline"} className="cursor-pointer">
                Update
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default PostDetails;
