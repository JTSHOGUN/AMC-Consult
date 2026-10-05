import type { Metadata } from "next";
import { WorkFilter } from "@/components/work-filter";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Our work: projects across Uganda and East Africa",
  description:
    "Case studies from AMC assignments with UWA, Finn Church Aid, Wezesha Impact, ILO and more. Filter by service and sector.",
};

export default function WorkPage() {
  return (
    <>
      <section className="container-page py-14 lg:py-20">
        <p className="tag">Our work</p>
        <h1 className="mt-5 max-w-3xl text-4xl md:text-5xl">
          Assignments delivered with government, donors and communities.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fore/85">
          AMC has executed over 50 development assignments across Uganda and East Africa. A selection
          is shown here.
        </p>
      </section>

      <section className="container-page pb-16">
        <WorkFilter />
      </section>

      <CtaBand
        title="Looking for experience like this?"
        text="Share your assignment details and we will respond with relevant references and a proposed team."
      />
    </>
  );
}
