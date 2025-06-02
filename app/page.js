import Recommended from "./components/Recommended";
import Latest from "./components/Latest"
import Popular from "./components/Popular"
import Special from "./components/Special"


export default function Home() {
  return (
    <div>

      {/* banner */}

      <div className="w-full h-[80vh] flex absolute z-[-1] bg-green-600">
        <img className="w-full h-full object-cover object-left-top" src="b2.jpg" alt="" />
      </div>

      {/* dummy */}

      <div className="banner w-full h-[80vh] flex items-end ">
        <div className="m-data ">
          Movie Details
        </div>
      </div>

      {/* movies */}

      <Popular /><Latest /><Recommended /><Special />

      {/* plans */}

      <div className="bg-black">
        <div className="w-full text-white text-9xl flex text-center justify-center py-14">UPGRADE <br /> FOR THE PERKS</div>
        <div className="w-full flex gap-16 py-14 px-80">
          <div className="w-full h-[600px] bg-[rgb(255,255,255,0.05)] rounded-2xl">
            <div className="text-red-600 h-[20%] font-extrabold flex items-center justify-center text-5xl">$XXX.XX</div>
            <div className=" h-[60%] text-white text-2xl flex items-center justify-center">
              <ul className="w-[60%] mx-auto list-disc">
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
              </ul>
            </div>
            <div className="h-[20%] flex items-center justify-center">
              <button className="bg-red-600 font-bold text-black text-3xl px-8 py-4 rounded-2xl">Subscribe</button>
            </div>
          </div>
          <div className="w-full h-[600px] bg-[rgb(255,255,255,0.05)] rounded-2xl">
            <div className="text-red-600 h-[20%] font-extrabold flex items-center justify-center text-5xl">$XXX.XX</div>
            <div className=" h-[60%] text-white text-2xl flex items-center justify-center">
              <ul className="w-[60%] mx-auto list-disc">
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
              </ul>
            </div>
            <div className="h-[20%] flex items-center justify-center">
              <button className="bg-red-600 font-bold text-black text-3xl px-8 py-4 rounded-2xl">Subscribe</button>
            </div>
          </div>
          <div className="w-full h-[600px] bg-[rgb(255,255,255,0.05)] rounded-2xl">
            <div className="text-red-600 h-[20%] font-extrabold flex items-center justify-center text-5xl">$XXX.XX</div>
            <div className=" h-[60%] text-white text-2xl flex items-center justify-center">
              <ul className="w-[60%] mx-auto list-disc">
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
                <li>Perk for subscription</li>
              </ul>
            </div>
            <div className="h-[20%] flex items-center justify-center">
              <button className="bg-red-600 font-bold text-black text-3xl px-8 py-4 rounded-2xl">Subscribe</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
