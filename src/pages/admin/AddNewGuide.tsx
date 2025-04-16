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
import { useCreateGuide } from "@/react-query/guide/guide";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddNewGuide = () => {
  const navigate = useNavigate();

  const { mutate: createGuide } = useCreateGuide();

  // form submition update
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const postData = {
      title: formData.get("title"),
      picture: formData.get("image"),
      descriptionEng: formData.get("contentEnglish"),
      descriptionMyan: formData.get("contentBurmese"),
    };
    createGuide(postData, {
      onSuccess: () => {
        toast.success("Post created Successfully!");
      },
      onError: (error) => {
          console.error("🔥 onError called with:", error);
        toast.error("Failed to create");
      },
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between m-2">
        <div className="font-bold text-2xl text-slate-500">Add New Guide</div>
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
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 ">
            <div>
              <label htmlFor="postPic">Post Picture</label>
              <Input name="image" id="postPic" placeholder="file" />
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

export default AddNewGuide;
