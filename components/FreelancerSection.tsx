import { TbCircleCheck } from "react-icons/tb";

export default function FreelancerSection() {
  return (
    <div id="why-us" className="section-freelancers">
      <div className="page-padding">
        <div className="container mx-auto">
          {/* Change grid to 2 columns and add gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"> 
            {/* Column 1: Text content */}
            <div> 
              <div className="mb-6">
                <h2 className="max-width-915 font-color--0b0b0b inline-text">Ad agencies are dead. We&apos;re what comes next.</h2>
              </div>
              <p className="mt-10 max-w-xl leading-relaxed">Embed a hands-on team of Growth Marketing experts in your business as your full-stack growth marketing department, or as an extension of your internal marketing team. </p>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-5 mt-6"> {/* Added margin-top */}
                <div className="inline-flex items-center">
                  <TbCircleCheck size={32} color="#22c55e" className="list-check-icon" />
                  <div className="list-text">No Endless Meeting</div>
                </div>
                <div className="inline-flex items-center">
                  <TbCircleCheck size={32} color="#22c55e" className="list-check-icon" />
                  <div className="list-text">No Fluffy Boring Words</div>
                </div>
                <div className="inline-flex items-center">
                  <TbCircleCheck size={32} color="#22c55e" className="list-check-icon" />
                  <div className="list-text">No Complex Data</div>
                </div>
              </div>
            </div>
            {/* Column 2: Video */}
            <div> 
              <video 
                src="https://cdn.prod.website-files.com/62569ba9f20c6909651c4ef3/62bb5ed0eed88e4ed1a1dcf8_dapper_homepage_video_minified-transcode.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline 
                // Set fixed height and object-cover
                className="w-full -mt-20 h-[800px] rounded-lg shadow-lg object-cover" 
              >
                Your browser does not support the video tag. 
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
