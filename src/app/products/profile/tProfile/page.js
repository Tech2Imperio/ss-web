"use client";
import React from "react";
import Image from "next/image";
import wallImg from "../../../assets/product/profile/T_profile/wall.webp";
import upofile from "../../../assets/product/profile/U_profile/Uprofile.webp";
import VerticalImg from "../../../assets/product/profile/T_profile/Tprofile.webp";

const page = () => {
  const data = [
    {
      thickness: "0.6~2.0 mm",
      finishes: "Mirror | Hairline | Bead Blasr % any More",
      colors: "7 colors",
      grade: "304",
      productType: "T Profile",
      size: "T6 ~ T50 % more",
      length: "2440mm | 3050mm",
    },
  ];
  return (
    <section className=" flex flex-col overflow-hidden w-full h-full px-[18rem]">
      <h1 className=" text-5xl flex justify-center text-center p-10 text-[#29a1d3] arimo">
        T Profile
      </h1>
      <div className=" flex flex-col justify-center text-justify text-xl text-slate-500 gap-4 dm-sans">
        <p>
          Explore the versatility of stainless steel T profiles from Rajgure
          Steel Industries. Our T profiles are available in seven vibrant
          colors, making them perfect for enhancing your home design. These
          durable profiles offer exceptional strength and aesthetic appeal,
          making them ideal for various applications, from structural supports
          to decorative elements.
        </p>
        <p>
          Using T profiles in your home can transform spaces, providing both
          functionality and style. Their unique shape allows for easy
          integration into furniture, shelving, and architectural designs. With
          the added advantage of corrosion resistance, our stainless steel T
          profiles ensure longevity, making them a smart choice for any project.
        </p>
        <p>
          Discover how Rajgure Steel Industries can elevate your designs with
          high-quality T profiles that blend seamlessly with your vision!
        </p>
      </div>
      <div className=" flex justify-center  ">
        <Image
          className=" object-cover h-[35rem] w-[45rem]"
          src={wallImg}
          alt="T-profile wall design"
        />
      </div>
      <div className=" flex flex-col justify-center">
        <h2 className=" text-4xl flex justify-center text-center p-4 text-[#e3cca1] arimo">
          Stainless Steel T Profile Specifications
        </h2>
        <table className=" border-collapse w-[100%]">
          <thead className=" text-[#e3cca1] justify-center text-centre ">
            <tr className=" bg-[#5e6b92]">
              <th>Thickness</th>
              <th>Finishes</th>
              <th>Colours</th>
              <th>Grade</th>
              <th>Product Type</th>
              <th>Size</th>
              <th>Length</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className=" text-center dm-sans">
                <td>{item.thickness}</td>
                <td>{item.finishes}</td>
                <td>{item.colors}</td>
                <td>{item.grade}</td>
                <td>{item.productType}</td>
                <td>{item.size}</td>
                <td>{item.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <style jsx>{`
          th,
          td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: centre;
          }
        `}</style>
      </div>
      <div className=" flex flex-2 justify-center h-full w-full text-justify gap-24 space-y-14">
        <div className=" flex w-[40vw] align-middle items-center h-auto justify-center">
        <Image
          className=" object-contain w-[35rem] h-[35rem]"
          src={VerticalImg}
          alt=""
        />
        </div>
        <div className=" flex flex-col w-[40vw] gap-5 justify-around">
          <div className=" flex flex-col gap-3">
            <h1 className="  text-3xl text-[#dac092] arimo">
              What is Stainless Steel T Profile?{" "}
            </h1>
            <p className=" text-slate-500 dm-sans text-xl">
              A Stainless Steel T Profile is a metal profile characterized by a
              "T"-shaped cross-section, offering superior strength and
              versatility in construction, architecture, and engineering
              applications. Its design includes two parallel flanges connected
              by a vertical web, making it ideal for load-bearing structures and
              providing excellent resistance to external weather conditions and
              corrosion. Moreover, these profiles are highly weldable,
              machinable, and formable, making them easy to work with in diverse
              construction projects.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="  text-3xl text-[#dac092] arimo">
              Properties of Stainless Steel T Profiles.
            </h1>
            <p className=" text-slate-500 dm-sans text-xl">
              At Rajguru Steel Industry, we manufacture stainless steel T
              profiles using high-quality austenitic stainless steel, known for
              its exceptional durability and corrosion resistance. These
              profiles contain significant levels of chromium and nickel,
              ensuring protection against rust, while the addition of molybdenum
              enhances resistance to pitting and crevice corrosion in harsh,
              chloride-rich environments. Austenitic stainless steel also offers
              impressive mechanical properties like high tensile and yield
              strength, making it perfect for both industrial and architectural
              uses. Our stainless steel T profiles are available in a variety of
              sizes and thicknesses to accommodate different project
              requirements.{" "}
            </p>
          </div>
        </div>
      </div>
      <main className="flex flex-col justify-center text-justify gap-24 translate-y-14 ">
        {/* <div>
            <h1 className=" text-2xl text-[#dac092] arimo">Benefits of Stainless Steel T Profiles</h1>
            <p className=" text-slate-500">
              <span className=" text-xl text-[#e2be7f] arimo">1. Corrosion Resistance: </span>One of the standout features of
              stainless steel T profiles is their exceptional resistance to rust
              and corrosion. This makes them perfect for environments exposed to
              moisture, chemicals, or the elements, such as coastal areas or
              industrial applications
            </p>
            <p className=" text-slate-500">
              <span className=" text-xl text-[#e2be7f] arimo">2. Durability: </span>T profiles from Rajguru Steel Industry
              are known for their long lifespan, often exceeding 100 years in
              well-maintained structures. The strength of stainless steel ensures
              a long-lasting and maintenance-free solution for projects that
              require sturdy structural components.
            </p>
            <p className=" text-slate-500">
              <span className=" text-xl text-[#e2be7f] arimo">3. Aesthetic Appeal: </span>In addition to their structural
              benefits, stainless steel T profiles add a sleek, modern look to any
              project. Their elegant finish and minimal maintenance requirements
              make them a popular choice for both commercial and residential
              applications.
            </p>
            <p className=" text-slate-500">
              <span className=" text-xl text-[#e2be7f] arimo">4. Versatility: </span> Stainless steel T profiles are used in
              a wide range of applications, from architectural designs to
              automotive reinforcement. Their ability to be easily fabricated
              makes them a go-to material for custom projects.
            </p>
          </div> */}
        <div className="overflow-x-auto my-14">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-4 px-4 text-left text-3xl text-[#dac092] arimo whitespace-nowrap">
                  Benefits of Stainless Steel T Profiles.{" "}
                </th>
                {/* <th className="py-2 px-4 text-left text-2xl text-[#dac092] arimo">Description</th> */}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-4 px-4 text-2xl text-[#e2be7f] arimo whitespace-nowrap">
                  1. Corrosion Resistance
                </td>
                <td className="py-4 px-4 text-lg text-slate-500 dm-sans">
                  One of the standout features of stainless steel T profiles is
                  their exceptional resistance to rust and corrosion. This makes
                  them perfect for environments exposed to moisture, chemicals,
                  or the elements, such as coastal areas or industrial
                  applications.
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-4 text-2xl text-[#e2be7f] arimo">
                  2. Durability
                </td>
                <td className="p-4 text-lg text-slate-500 dm-sans">
                  T profiles from Rajguru Steel Industry are known for their
                  long lifespan, often exceeding 100 years in well-maintained
                  structures. The strength of stainless steel ensures a
                  long-lasting and maintenance-free solution for projects that
                  require sturdy structural components.
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-4 text-2xl text-[#e2be7f] arimo">
                  3. Aesthetic Appeal
                </td>
                <td className="p-4 text-lg text-slate-500 dm-sans">
                  In addition to their structural benefits, stainless steel T
                  profiles add a sleek, modern look to any project. Their
                  elegant finish and minimal maintenance requirements make them
                  a popular choice for both commercial and residential
                  applications.
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-4 text-2xl text-[#e2be7f] arimo">
                  4. Versatility
                </td>
                <td className="p-4 text-lg text-slate-500 dm-sans">
                  Stainless steel T profiles are used in a wide range of
                  applications, from architectural designs to automotive
                  reinforcement. Their ability to be easily fabricated makes
                  them a go-to material for custom projects.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-[#dac092] arimo mb-4 text-center">
              Architectural and Construction Applications.
            </h2>
            <p className="text-slate-500 dm-sans">
              T profiles are widely used in building facades, curtain walls,
              glass railings, and structural supports. The combination of
              strength and corrosion resistance ensures durability while
              maintaining an aesthetically pleasing design.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-[#dac092] arimo mb-4 text-center">
              Furniture and Shelving.
            </h2>
            <p className="text-slate-500 dm-sans">
              In interior design, T profiles are employed in furniture,
              shelving, and display systems. The robust structure of stainless
              steel ensures the ability to bear heavy loads while providing a
              sleek, polished look to furniture pieces.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-center text-[#dac092] arimo mb-4">
              Automotive and Marine Industry.{" "}
            </h2>
            <p className="text-slate-500 dm-sans">
              Stainless steel T profiles are frequently used in car frames,
              providing essential reinforcement while minimizing weight. In
              marine applications, their corrosion resistance makes them ideal
              for use in boat manufacturing, where exposure to saltwater is
              common.
            </p>
          </div>
        </div>
      </main>
      <div className=" translate-y-20 flex flex-row text-2xl text-[#dac092] arimo">
        <h2>Related Products.</h2>
        <div className=" flex flex-col">
          <div className=" border border-black flex flex-col translate-y-12">
            <Image className=" object-contain h-44 w-44" src={upofile} alt="" />
          </div>
          <h3>U Profile</h3>
        </div>
      </div>
    </section>
  );
};

export default page;
