import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title, description }: any) {
  const router = useRouter();
  const currentUrl = process.env.NEXT_PUBLIC_BASE_URL + router.asPath;

  return (
    <>
      <div className="relative block w-full bg-lightGreen">
        <Head>
          <title>{title ? title : "A Brand New Company"}</title>
          <meta name="description" content={description ? description : ""} />
          <meta
            property="og:title"
            content={title ? title : "A Brand New Company"}
          />
          <meta
            property="og:description"
            content={description ? description : ""}
          />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://green-land-eight.vercel.app/images/ak-020-amsterdam-genetics.jpg"
          />
          <meta property="og:image:alt" content="Greenland example product" />
          <meta property="og:site_name" content="GreenLands" />
          <meta property="og:locale" content="en_US" />
          <meta property="fb:app_id" content="Your Facebook App ID" />
          <meta property="article:author" content="Your Author Name" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yourtwitterhandle" />
          <meta name="twitter:creator" content="@yourtwitterhandle" />
          <meta name="twitter:title" content={title ? title : "GreenLands"} />
          <meta
            name="twitter:description"
            content={description ? description : ""}
          />
          <meta
            name="twitter:image"
            content="https://green-land-eight.vercel.app/images/ak-020-amsterdam-genetics.jpg"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#a4de95" />
          <meta name="msapplication-TileColor" content="#a4de95" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Header />
        <main className="font-body text-defaultText">{children}</main>
        <Footer />
      </div>
    </>
  );
}
