import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const Paste = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 pt-12">
        <div className="mb-4">
          <div className="mb-2">
            <Label htmlFor="paste" className="text-xl">
              Create new paste
            </Label>
          </div>
          <Textarea id="paste" placeholder="Paste your text here..." rows={8} className="resize-y" />
        </div>

        <div className="pb-2 mb-4 border-b">
          <h1 className="font-semibold text-2xl">Details</h1>
        </div>

        <div className="flex flex-col gap-4 max-w-xl">
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center">
            <h2 className="text-lg font-medium w-40">Title:</h2>
            <div className="w-96">
              <Input type="text" placeholder="Enter title" className="w-full" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center">
            <h2 className="text-lg font-medium w-40">Expiration:</h2>
            <div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Time</SelectLabel>
                    <SelectItem value="after">After Read</SelectItem>
                    <SelectItem value="day">1 Day</SelectItem>
                    <SelectItem value="week">1 Week</SelectItem>
                    <SelectItem value="month">1 Month</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center">
            <h2 className="text-lg font-medium w-40">Visibility:</h2>
            <div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Visibility" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Visibility</SelectLabel>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-baseline mb-4">
            <h2 className="text-lg font-medium w-40">Password:</h2>
            <div className="w-64">
              <div className="flex items-center gap-2 mb-4">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Enabled
                </label>
              </div>
              <Input type="password" className="w-full" />
            </div>
          </div>

          <Button className="w-full">Create Paste</Button>
        </div>
      </div>
    </>
  );
};

export default Paste;
