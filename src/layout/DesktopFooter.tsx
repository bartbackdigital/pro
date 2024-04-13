import React from "react";
import Link from "next/link";
import Image from "next/image";

function DesktopFooter() {
  return (
    <section className="bg-customGray w-full px-5 font-poppins text-base text-darkGray">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 pt-10">
            <h3 className="uppercase  text-h3 text-darkGray mb-10">Contact</h3>
            <div className="flex flex-col">
              <div className="w-full flex items-center mb-6">
                <div className="mail" />
                <Link
                  href="mailto:info@proranje.nl"
                  className="text-secondary text-base"
                >
                  Info@proranje.nl
                </Link>
              </div>
              <div className="w-full flex items-center mb-10">
                <div className="phone" />
                <div className="flex flex-col space-y-2 text-secondary">
                  <Link className="" href="">
                    Amsterdam: 020-2440930
                  </Link>
                  <Link className="" href="">
                    Rotterdam: 010-3075826
                  </Link>
                  <Link className="" href="">
                    Den Haag: 070-2210162
                  </Link>
                </div>
              </div>
              <div className="w-full flex items-center">
                <div className="location" />
                <div className="flex flex-col space-y-2">
                  <span>Hobbemakade 73, Amsterdam</span>
                  <span>Hofplein 20, Rotterdam</span>
                  <span>Prinsegracht 38, Den Haag</span>
                </div>
              </div>
            </div>
            <h3 className="uppercase  text-h3 text-darkGray mb-10 mt-20 md:mt-40">
              Socialmedia
            </h3>
            <div className="flex flex-row space-x-5">
              <Link className="" href="">
                <Image
                  src="/images/facebook.png"
                  alt=""
                  width={35}
                  height={35}
                />
              </Link>
              <Link className="" href="">
                <Image
                  src="/images/linkedin.png"
                  alt=""
                  width={35}
                  height={35}
                />
              </Link>
              <Link className="" href="">
                <Image
                  src="/images/instagram-logo.png"
                  alt=""
                  width={35}
                  height={35}
                />
              </Link>
            </div>
          </div>
          <div className="flex-1 pt-20  md:pt-10 footer_listing">
            <h3 className="uppercase  text-h3 text-darkGray mb-5 md:mb-10">
              Steden
            </h3>
            <div className="flex flex-col pt-3">
              <div className="w-full flex mb-6 flex-col  space-y-3 ">
                <Link href="/" className="">
                  Huis verkopen Amsterdam
                </Link>
                <Link href="/" className="">
                  Huis verkopen Den Haag
                </Link>
                <Link href="/" className="">
                  Huis verkopen Rotterdam
                </Link>
                <Link href="/" className="">
                  Huis verkopen Utrecht
                </Link>
              </div>
              <h3 className="uppercase  text-h3 text-darkGray my-10">
                Extra Informatie
              </h3>
              <div className="w-full flex mb-6 flex-col space-y-3">
                <Link href="/" className="">
                  Gouden tip
                </Link>
                <Link href="/" className="">
                  Kosten huis verkopen
                </Link>
                <Link href="/" className="">
                  Verkopen zonder makelaar
                </Link>
                <Link href="/" className="">
                  Huis zelf verkopen
                </Link>
                <Link href="/" className="">
                  Opkoper vastgoed
                </Link>
                <Link href="/" className="">
                  Verhuurd verkopen
                </Link>
                <Link href="/" className="">
                  Opkoper huis
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-primary mt-10 md:mt-0 text-white text-center py-5 md:py-10">
            <Link title="proranje" href="/" className="hidden md:block">
              <Image
                decoding="async"
                src="/images/proranje-footer-logo.png"
                alt="randstad real estate logo"
                width={200}
                height={130}
                className="mx-auto my-10 md:my-44"
              />
            </Link>{" "}
            <Link title="proranje" href="/" className="md:hidden">
              <Image
                decoding="async"
                src="/images/proranje-footer-logo.png"
                alt="randstad real estate logo"
                width={350}
                height={200}
                className="mx-auto my-10 md:my-44"
              />
            </Link>
            <div className="text-base flex-col flex space-y-2 font-poppins pb-10 md:pb-20">
              <Link
                className="sitemap"
                title="sitemap"
                href="https://proranje.nl/sitemap/"
              >
                Sitemap
              </Link>
              <Link className="privacy " href="/privacy/">
                Privacy
              </Link>
              <Link className="nieuws" href="/nieuws/">
                Nieuws artikelen
              </Link>
              <Link className="vacatures" href="/vacatures/">
                Vacatures
              </Link>
              <Link
                className="veelgestelde-vragen"
                href="/veelgestelde-vragen/"
              >
                Veelgestelde vragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesktopFooter;
