"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "WHY HIMAL",
    id: "WHY HIMAL",
    content: (
      <ul className="list-disc pl-2">
        <li>Value-Driven Approach: We prioritize long-term partnerships and integrity, offering tailored recruitment solutions.</li>
        <li>Selective Candidate Matching: Carefully chosen candidates meet client needs, ensuring enduring relationships</li>
        <li>Thorough Validation Process: Rigorous checks verify candidate information for reliability.</li>
        <li>Competence Evaluation: Intensive assessments ensure candidates meet client standards.</li>
        <li>Customized Services: Tailored recruitment services cater to diverse business needs, onsite or offsite.</li>
        
      </ul>
    ),
  },
  {
    title: "Values",
    id: "Values",
    content: (
      <ul className="list-disc pl-2">
        <li>Integrity: Upholding honesty, transparency, and ethical conduct in all interactions and transactions</li>
        <li>Quality: Commitment to delivering top-tier candidates and services that consistently meet or exceed client expectations.</li>
        <li>Customer Focus: Prioritizing client needs and satisfaction, building strong and enduring relationships based on trust and reliability.</li>
        <li>Professionalism: Conducting business with professionalism, respect, and reliability, maintaining high standards of behavior and service delivery.</li>
        <li>Continuous Improvement: Pursuing ongoing development and innovation in processes, services, and skills to stay competitive and deliver the best outcomes for clients and candidates alike</li>
      </ul>
    ),
  },
  {
    title: "Existing Clients",
    id: "Existing Clients",
    content: (
      <ul className="list-disc pl-2">
        <li>ABU DHABI CONSTRUCTION COMPANY L.L.C</li>
        <li>ABU ALI GENERAL TRANSPORT&CONT.EST</li>
        <li>AL ABBAS GROUP</li>
        <li>AL KHALEEJ PLACE HOTEL</li>
        <li>BIN HUWAIDI VEHICLE BODY MANUFACTRING E.S.T</li>
        <li>NOKHBA BUILDING CONTRACTING CO LLC</li>
        <li>AL RAWAA GLASS&ALUMINIUM IND L.L.C</li>
        <li>HINDI DARBAAR RESTAURANT</li>
        <li>AL RAWAA GLASS AND MIRROR FACTORY LTD</li>
        <li>AL HAMRA FORT HOTEL & BEACH RESORT</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("WHY HIMAL");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/himal-logo.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About US</h2>
          <p className="text-base lg:text-lg">
          We are happy to introduce ourselves HIMAL INT'L RECRUITMENT SERVICES PVT.LTD.
          As one of the leading manpower recruitment company established in the year 2009 at United Arab Emirates.
          We proudly state that our company provides the best quality staff and fulfills all the Manpower related requirements.
          We are in a position to provide you with the best candidates from different countries as per your requirement. 
          We have large database of experienced professionals as well as fresher's.
          We can help the companies for recruitments in every field and from every part of India, Nepal, Pakistan and Bangladesh
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("WHY HIMAL")}
              active={tab === "WHY HIMAL"}
            >
              {" "}
              Why Himal International?{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Values")}
              active={tab === "Values"}
            >
              {" "}
              Our Values{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Existing Clients")}
              active={tab === "Existing Clients"}
            >
              {" "}
              Existing Clients{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
