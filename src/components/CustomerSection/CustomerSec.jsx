
import img from "../../assets/Rectangle 13.png";
function CustomerSec() {
  return (
    <>
      <div className="flex gap-[80px] px-20 py-28 items-center justify-center bg-white w-full">
        <div>
            <img src={img}/>
        </div>
        <div>
          <div>
            <p>Customer Stories</p>
            <h1 className="font-bold text-primary mb-5 mt-3 text-[56px]">Success History of Our Customer </h1>
            <p className="text-primary mb-5">
              Emphasise time-saving and use numbers to maximise credibility.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-5xl font-bold">10</h3>
              <p>Increase in productivity</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">5</h3>
              <p>Return on investment</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">345</h3>
              <p>Happy customers</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">100</h3>
              <p>5-star reviews</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerSec;
