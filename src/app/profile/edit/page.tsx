import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProfileEdit = () => {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <h1 className="text-4xl mb-4">Edit Profile</h1>

        <div className="border rounded-lg p-4">
          <div className="relative w-full mb-2">
            <Label htmlFor="fname">Full Name</Label>
            <Input id="fname" />
          </div>
          <div className="relative w-full mb-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" />
          </div>

          <div className="flex flex-row gap-4 mb-6">
            <div className="w-full">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" />
            </div>
            <div className="w-full">
              <Label htmlFor="repeat">Repeat Password</Label>
              <Input type="password" id="repeat" />
            </div>
          </div>

          <Button className="w-full">Update Profile</Button>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
