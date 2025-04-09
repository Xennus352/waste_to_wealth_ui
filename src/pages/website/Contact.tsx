import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useGetCurrentUser } from "@/react-query/user/user";
import { useCreateFeedback } from "@/react-query/contact/contact";

const Contact = () => {
  // current user
  const { data: user } = useGetCurrentUser();

  // create feedback
  const { mutate } = useCreateFeedback();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userFeedbackData = {
      id: user?.id,
      name: formData.get("name"),
      email: formData.get("email"),
      content: formData.get("content"),
    };
    mutate(userFeedbackData);
  };
  return (
    <div className="p-4 flex flex-col gap-4 w-full  justify-between max-w-2xl mx-auto h-1/2">
      <h2 className="m-3  text-3xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Write Feedback to us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Input
                name="name"
                type="text"
                placeholder="User Name"
                defaultValue={user?.name}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                defaultValue={user?.email}
              />
              <Textarea name="content" placeholder="Type your message here." />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              type="submit"
              variant={"outline"}
              className="hover:cursor-pointer"
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Contact;
