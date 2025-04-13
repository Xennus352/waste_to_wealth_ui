import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useGetCurrentUser, useUpdateUser } from "@/react-query/user/user";
import { Separator } from "@/components/ui/separator";
import { useGetAllPosts } from "@/react-query/post/post";
import { PostType } from "@/types/PostType";
import PostCard from "@/components/cards/PostCard";

const Profile = () => {
  // user info
  const { data: userInfo } = useGetCurrentUser();

  // get post which user posted
  const { data: postedByCurrentUser } = useGetAllPosts();

  const currentUserPost = postedByCurrentUser?.filter((post: PostType) => {
    return post?.userId === userInfo?.id;
  });

  // update user info
  const { mutate } = useUpdateUser();

  // handle to sent the information
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {
      id: userInfo?.id,
      name: formData.get("name"),
      email: formData.get("email"),
      PhoneNumber: formData.get("phoneNumber"),
      address: formData.get("address"),
      bio: formData.get("bio"),
    };
    mutate(userData);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2xl text-slate-500">
            Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div
              className="bg-slate-300 w-full md:grid md:grid-cols-3 p-4 
                     gap-6 flex flex-col justify-center 
                     bg-opacity-50 backdrop-blur-lg rounded-lg"
            >
              {/* mid side  */}
              <div className="border rounded-lg col-span-3 p-4">
                <div>
                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row gap-4">
                      <Input
                        name="name"
                        defaultValue={userInfo?.name}
                        placeholder="Name"
                        className="placeholder:text-black"
                      />
                      <Input
                        name="email"
                        defaultValue={userInfo?.email}
                        placeholder="Email"
                        className="placeholder:text-black"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <Input
                        name="phoneNumber"
                        defaultValue={userInfo?.PhoneNumber}
                        placeholder="Phone Number"
                        className="placeholder:text-black"
                      />
                      <Input
                        name="address"
                        defaultValue={userInfo?.address}
                        placeholder="Address"
                        className="placeholder:text-black"
                      />
                    </div>
                    <Textarea
                      name="bio"
                      defaultValue={userInfo?.bio}
                      placeholder="Bio"
                      className="placeholder:text-black border-t-0"
                    />

                    <Button
                      type="submit"
                      className="hover:cursor-pointer bg-slate-400 text-white"
                      variant={"outline"}
                    >
                      Update
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator className="mt-2" />

      {/* this is the display section of the current user posts  */}

    {/* <p>Posts</p> */}
      
      <div>
        {currentUserPost &&
          currentUserPost?.map((post: PostType) => {
            return (
              <div key={post.id}>
                <PostCard post={post} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Profile;
