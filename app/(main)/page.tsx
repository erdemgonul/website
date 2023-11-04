export const metadata = {
  title: "Erdem Gönül | Frontend Developer",
  description:
    "a passionate frontend developer who loves to imagine, design and code. Explore my work and discover my skills in creating beautiful and functional websites that engage and delight users. ahmet erdem gönül.",
};

export default async function Home() {
  return (
    <div className="homepage">
      <section>
        <div className="max-w-screen-lg md:flex md:flex-col bottom-0">
          <div className="flex flex-col w-fit">
            <h1 className="slogan">Erdem Gönül</h1>
            <h2 className="sub-slogan">Frontend Developer</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
