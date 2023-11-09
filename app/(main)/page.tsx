export const metadata = {
  title: "Home",
  description:
    "a passionate frontend developer who loves to imagine, design and code. Explore my work and discover my skills in creating beautiful and functional websites that engage and delight users. ahmet erdem gönül.",
};

export default async function Home() {
  return (
    <div className="bg-black mx-auto w-full h-full grow items-end flex">
      <div className="md:max-w-screen-lg flex flex-col mb-20 mx-8 md:mb-20 md:mx-20">
        <div className="flex flex-col w-fit">
          <h1 className="slogan">Erdem Gönül</h1>
          <h2 className="sub-slogan">Frontend Developer</h2>
        </div>
      </div>
    </div>
  );
}
