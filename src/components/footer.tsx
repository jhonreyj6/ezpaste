import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t pt-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="flex flex-row gap-8 mb-8 border-b pb-8">
          <div className="w-2/4 pr-40">
            <div className="mb-8">
              <img src="https://landingfoliocom.imgix.net/store/collection/saasui/images/logo.svg" alt="" />
            </div>
            <p className="mb-4">
              Clarity gives you the blocks and components you need to create a truly professional website.
            </p>
            <div className="flex flex-row gap-4">
              <img width="36" height="36" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new" />
              <img
                width="36"
                height="36"
                src="https://img.icons8.com/office/40/instagram-new.png"
                alt="instagram-new"
              />
              <img
                width="36"
                height="36"
                src="https://img.icons8.com/ios-filled/50/twitterx--v1.png"
                alt="twitterx--v1"
              />
            </div>
          </div>

          <div className="w-1/4">
            <div className="flex flex-col gap-4">
              <h5 className="text-blue-500 font-medium">Title</h5>
              <Link href={"/"} className="text-blue-500">
                Link
              </Link>
              <Link href={"/"} className="text-blue-500">
                Link
              </Link>
              <Link href={"/"} className="text-blue-500">
                Link
              </Link>
              <Link href={"/"} className="text-blue-500">
                Link
              </Link>
            </div>
          </div>

          <div className="w-1/4">
            <div className="flex flex-col gap-4">
              <h5 className="text-blue-500 font-medium">Title</h5>
              <Link href={"/"} className="text-blue-500">
                Link
              </Link>
              <Link href={"/"} className="text-blue-500">
                Link
              </Link>
              <Link href={"/"} className="text-blue-500">
                Link
              </Link>
              <Link href={"/"} className="text-blue-500">
                Link
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">© Copyright 2022, All Rights Reserved by ClarityUI</div>
      </div>
    </footer>
  );
};

export default Footer;
