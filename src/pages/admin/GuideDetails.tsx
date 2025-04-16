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
import { useGetSingleGuide, useUpdateGuide } from "@/react-query/guide/guide";
import Loading from "@/utils/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const GuideDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: singlePost,
    isLoading,
    isError,
  } = useGetSingleGuide(id as string);

  const { mutate: updateGuide } = useUpdateGuide();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h2>Something went wrong!</h2>;
  }

  // form submition update
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const postData = {
      id: singlePost.id,
      title: formData.get("title"),
      picture: formData.get("image"),
      descriptionEng: formData.get("contentEnglish"),
      descriptionMyan: formData.get("contentBurmese"),
      isApproved: formData.get("isApproved") == "true" ? true : false,
      type: formData.get("type"),
    };
    updateGuide(postData, {
      onSuccess: () => {
        toast.success("Guide updated Successfully!");
        navigate(-1);
      },
      onError: () => {
        toast.error("Failed to update");
      },
    });
  };
  return (
    <>
      <div className="flex items-center justify-between m-2">
        <div className="font-bold text-2xl text-slate-500">
          Guide Post Details
        </div>
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
                <div className=" flex items-center justify-between gap-3"></div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 ">
            <div>
              <div className="p-4 rounded-md cursor-pointer  flex md:h-70 lg:h-70 xl:h-70 items-center justify-center flex-grow">
               
                  <img
                    src={singlePost.picture}
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
                defaultValue={singlePost.descriptionEng}
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
                defaultValue={singlePost.descriptionMyan}
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
    </>
  );
};

export default GuideDetails;
