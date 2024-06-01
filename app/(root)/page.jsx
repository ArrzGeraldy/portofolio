import Title from "@/components/Title";
import EducationCard from "@/components/education/EducationCard";
import { educationData } from "@/data/education";

import Sertification from "@/components/education/Sertification";
const page = () => {
  const educations = educationData;
  return (
    <>
      <article>
        <Title title={"About Me."} />
        <div className="mt-8 flex flex-col gap-2 text-gray-300">
          <p>
            <span className="text-color-orange text-2xl font-medium">Hi</span>,
            saya adalah seorang mahasiswa Teknik Informatika yang memiliki
            keahlian dalam pengembangan aplikasi web. Di sisi server, saya
            menggunakan{" "}
            <span className="text-color-orange font-medium">Node.js</span>{" "}
            dengan kerangka kerja Express, sementara di sisi klien, saya
            mengandalkan{" "}
            <span className="text-color-orange font-medium">React.js</span>{" "}
            untuk menciptakan antarmuka pengguna yang dinamis dan responsif.
            Saya juga memiliki kemampuan dalam menggunakan{" "}
            <span className="text-color-orange font-medium">Python</span> untuk
            melakukan web scraping, yang memungkinkan saya mengumpulkan dan
            menganalisis data secara efisien.
          </p>
        </div>
      </article>
      <article className="mt-24 text-gray-300">
        <Title title={"Education"} />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {educations.map((education, i) => (
            <EducationCard
              level={education.level}
              name={education.name}
              year={education.year}
              key={i}
            />
          ))}
        </div>
      </article>
      <article className="mt-24">
        <Title title={"Sertification"} />
        <Sertification />
      </article>
    </>
  );
};

export default page;
