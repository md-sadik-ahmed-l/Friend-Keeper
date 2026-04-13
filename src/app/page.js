import Banner from "@/component/Banner/Banner";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans">
      <main className="flex flex-1 w-full  flex-col items-center justify-between   bg-white dark:bg sm:items-start">
        <Banner></Banner>
       
      </main>
    </div>
  );
}
