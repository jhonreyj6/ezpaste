import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <div className="h-[510px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 mb-16">
        <div className="relative pt-12 mb-8 w-96 mx-auto h-64">
          <div className="p-8 left-24 top-24 border rounded-lg h-40 w-40 bg-yellow-500 mx-auto flex items-center justify-center absolute z-10 shadow-2xl">
            <h1 className="text-7xl text-slate-700 italic ab">T</h1>
          </div>
          <div className="p-8 border rounded-lg h-40 w-40 bg-slate-500 mx-auto flex items-center justify-center absolute left-40"></div>
        </div>

        <div className="text-white text-center max-w-xl mx-auto px-4">
          <h1 className="text-4xl text-white font-medium mb-8">Paste and Share with EzPaste</h1>
          <form>
            <div className="flex items-center mb-4">
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                  placeholder="Paste your text here..."
                  required
                />
                <i className="material-icons absolute inset-y-2 text-blue-500 end-0 flex items-center pe-3">
                  content_paste
                </i>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Paste now
            </button>
          </form>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 mb-12">
        <h1 className="text-center text-5xl font-semibold mb-6">How does it work?</h1>
        <p className="text-center mb-12">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
        </p>

        <div className="flex flex-row mb-4">
          <div className="text-center w-1/3 after:border after:border-blue-500 after:mb-0">
            <div className="border h-16 w-16 bg-blue-500 text-white mx-auto rounded-full flex items-center justify-center">
              <span>1</span>
            </div>
          </div>
          <div className="text-center w-1/3 after:border after:border-blue-500 after:mb-0">
            <div className="border h-16 w-16 bg-blue-500 text-white mx-auto rounded-full flex items-center justify-center">
              <span>2</span>
            </div>
          </div>
          <div className="text-center w-1/3 after:border after:border-blue-500 after:mb-0">
            <div className="border h-16 w-16 bg-blue-500 text-white mx-auto rounded-full flex items-center justify-center">
              <span>3</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div className="w-1/3">
            <h1 className="text-xl font-medium text-center mb-4">Paste</h1>
            <p className="text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit.
            </p>
          </div>

          <div className="w-1/3">
            <h1 className="text-xl font-medium text-center mb-4">Copy Link</h1>
            <p className="text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit.
            </p>
          </div>

          <div className="w-1/3">
            <h1 className="text-xl font-medium text-center mb-4">Share</h1>
            <p className="text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-row gap-8">
          <Card className="w-1/4">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <img
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                “Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. Exercitation veniam consequat”
              </p>
            </CardContent>
            <CardFooter className="flex flex-col">
              <h1 className="text-lg text-blue-500">Jenny Wilson</h1>
              <p className="text-gray-400">Project Manager at Microsoft</p>
            </CardFooter>
          </Card>

          <Card className="w-1/4">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <img
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                “Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. Exercitation veniam consequat”
              </p>
            </CardContent>
            <CardFooter className="flex flex-col">
              <h1 className="text-lg text-blue-500">Jenny Wilson</h1>
              <p className="text-gray-400">Project Manager at Microsoft</p>
            </CardFooter>
          </Card>

          <Card className="w-1/4">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <img
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                “Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. Exercitation veniam consequat”
              </p>
            </CardContent>
            <CardFooter className="flex flex-col">
              <h1 className="text-lg text-blue-500">Jenny Wilson</h1>
              <p className="text-gray-400">Project Manager at Microsoft</p>
            </CardFooter>
          </Card>

          <Card className="w-1/4">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <img
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                “Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. Exercitation veniam consequat”
              </p>
            </CardContent>
            <CardFooter className="flex flex-col">
              <h1 className="text-lg text-blue-500">Jenny Wilson</h1>
              <p className="text-gray-400">Project Manager at Microsoft</p>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="max-w-7xl px-4 mx-auto">
        <div className="flex flex-row gap-8">
          <Card className="w-1/3">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex flex-row gap-8">
                <div className="">
                  <i className="material-icons !text-3xl">verified</i>
                </div>
                <div>
                  <h2 className="text-2xl mb-4 font-medium">Basic</h2>
                  <p className="text-gray-400">Lorem ipsum dolor sit amet, consec tetur adipis elit</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              <div className="flex flex-row gap-1 items-baseline mb-4">
                <h1 className="text-4xl font-medium">Free</h1>
              </div>
              <Button variant="outline" className="w-full mb-6">
                Get Started
              </Button>

              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-1/3">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex flex-row gap-8">
                <div className="">
                  <i className="material-icons !text-3xl text-yellow-500">star</i>
                </div>
                <div>
                  <h2 className="text-2xl mb-4 font-medium text-blue-500">Advance</h2>
                  <p className="text-gray-400">Lorem ipsum dolor sit amet, consec tetur adipis elit</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              <div className="flex flex-row gap-1 items-baseline mb-4">
                <h1 className="text-4xl font-medium">$20</h1>
                <h4>/ month</h4>
              </div>
              <Button variant="outline" className="w-full mb-6">
                Get Started
              </Button>

              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-1/3">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex flex-row gap-8">
                <div className="">
                  <i className="material-icons !text-3xl text-indigo-700">rocket</i>
                </div>
                <div>
                  <h2 className="text-2xl mb-4 font-medium">Pro</h2>
                  <p className="text-gray-400">Lorem ipsum dolor sit amet, consec tetur adipis elit</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              <div className="flex flex-row gap-1 items-baseline mb-4">
                <h1 className="text-4xl font-medium">$40</h1>
                <h4>/ month</h4>
              </div>
              <Button variant="outline" className="w-full mb-6">
                Get Started
              </Button>

              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="material-icons text-blue-500">check_circle</i>
                  <p>Proident eiusmod proident deserunt.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Home;
