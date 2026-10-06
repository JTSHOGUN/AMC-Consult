import type { Metadata } from "next";
import { JoinForm } from "@/components/join-form";

export const metadata: Metadata = {
  title: "Work with us: join the roster or request staff",
  description:
    "Consultants, trainers and researchers can join AMC's associate roster. Employers can request data collectors, trainers and technical personnel.",
};

export default function WorkWithUsPage() {
  return (
    <>
      <section className="container-page py-14 lg:py-20">
        <p className="tag">Work with us</p>
        <h1 className="mt-5 max-w-3xl text-4xl md:text-5xl">Two ways to work with AMC.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fore/85">
          Join our associate network of consultants and trainers, or engage us to recruit skilled
          personnel for your organisation.
        </p>
      </section>

      <section className="container-page grid gap-10 pb-14 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl">Join the roster</h2>
          <p className="mt-3 leading-relaxed text-fore/85">
            We are always looking for experienced consultants, trainers, researchers and data
            collectors across Uganda and East Africa. Upload your CV and tell us about your
            expertise.
          </p>
          <div className="mt-5">
            <JoinForm track="roster" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl">Request staff</h2>
          <p className="mt-3 leading-relaxed text-fore/85">
            AMC recruits skilled trainers, researchers, data collectors and technical personnel for
            private, public and international organisations. Tell us what you need.
          </p>
          <div className="mt-5">
            <JoinForm track="staff" />
          </div>
        </div>
      </section>
    </>
  );
}
