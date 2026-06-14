import React, { useState, useEffect, useRef } from "react";
import { Send, Volume2, VolumeX, Radio, Eye, Disc } from "lucide-react";

interface Camera {
  id: string;
  name: string;
  location: string;
  subLocation: string;
  poster: string;
  ambientNoise: string;
}

export default function LiveStream() {
  const [selectedCam, setSelectedCam] = useState<string>("cam1");
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [chatMessage, setChatMessage] = useState("");
  const [chatFeed, setChatFeed] = useState<Array<{ name: string, message: string, time: string }>>([
    { name: "Suresh Sharma", message: "Radhe Radhe! Beautiful morning in Vrindavan.", time: "09:12" },
    { name: "Priya Patel", message: "Thank you Gau Seva Trust for taking care of these gentle cows.", time: "09:14" },
    { name: "Ketan Iyer", message: "Amazing. Feeding session looks very well organized.", time: "09:16" },
  ]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const cameras: Camera[] = [
    {
      id: "cam1",
      name: "Meadow feed (Vrindavan)",
      location: "Krishna Seva Dham",
      subLocation: "Grassland Meadow A",
      poster: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKIiDn4dAbEQJAmShpCrqD99P-Hg2KAcFzU1-4OfkzLrvDrZNxC-Q5DIix8VFfLyp48YpScIz2hz5ZtKbIATeW59cDpMXe6GcLQmo00xNKTvZbB5KW3M6Py7gnyl5vFEz1f3K_g7GhGfG70xOjVLYwNFaWKaaQM5ZInYDYG3YSvEkeDXFG9dP55WsVRN4DXTfDvikFhKXxHFitj03fcqxIyXlXDThQuHylIamjZ4qHduYCUMY6z74skFbtI4U_vg7ykxsMKNZ2lEs",
      ambientNoise: "Birds chirping, soft bells ringing"
    },
    {
      id: "cam2",
      name: "Himalayan Foothills Feed",
      location: "Himalayan Gau Gram",
      subLocation: "Ganges Bank Shelter",
      poster: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5zxg-wWbrkndBcn1a9BJ_T1tZ6z6Mazy_NezyjMiSJGsMt83dW5b0TOxgFkWY-f0rhCD6KGF8rP_wdEwo2-Ue1mPE09nbF2HBlmxBz3JrXr5Pd-s007RnYkI1SJI3jy7xINBDJAohfdi30PTckZpruEb4z5gYdNhBZj1splmk1BsT8I4Ls3Q-zA1cYEtO2YfKJ-Yz4g5I1vouEjcE8wjNoaTTdIsTZ_hJBO3P89KdKoPYLaF2JYEJBs1ATK5LbUs_27__CnCQABU",
      ambientNoise: "River murmurs, temple bells"
    },
    {
      id: "cam3",
      name: "Heritage Sanctum (Hampi)",
      location: "Heritage Gau Shala",
      subLocation: "Sacred Pillar Pavillion",
      poster: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgtT1Quvj6WWcDoPLqURod6NWsY0SGde8ZpHRIi7aZXxP7IZhUs7cJccseuyIlu4Rsgo1F0NVz-u9m6InLEQXC_SxEmAnZgB5zIG77-YB7nDjZvktLCOyNNAfS4CXw3W9zE2osgRPZkX0v10f2QTLhd_webkkkvGp5Y3Anb3ceRbqNYIKkx5VVCFMohkvlOf5G67q1RLbD3PvlABcnja5teiKh-qybn-F-XMvv9XhsIxaMv3oZWaMRiAfBR8yFZxjykRqNujQEJoY",
      ambientNoise: "Traditional chants, soft wind"
    }
  ];

  const activeCam = cameras.find((c) => c.id === selectedCam) || cameras[0];

  // Tick current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Custom static / scanline overlay rendering on HTML Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let scanlineOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle vintage static noise
      const width = canvas.width;
      const height = canvas.height;
      
      // Draw Scanlines
      ctx.fillStyle = "rgba(143, 78, 0, 0.05)";
      for (let y = scanlineOffset; y < height; y += 8) {
        ctx.fillRect(0, y, width, 1.5);
      }
      
      // Draw grid overlays
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(width / 3, 0); ctx.lineTo(width / 3, height);
      ctx.moveTo((2 * width) / 3, 0); ctx.lineTo((2 * width) / 3, height);
      ctx.moveTo(0, height / 3); ctx.lineTo(width, height / 3);
      ctx.moveTo(0, (2 * height) / 3); ctx.lineTo(width, (2 * height) / 3);
      ctx.stroke();

      // Vignette effect
      const gradient = ctx.createRadialGradient(width/2, height/2, width/4, width/2, height/2, width/2);
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.4)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      scanlineOffset = (scanlineOffset + 0.5) % 8;
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [selectedCam]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    const now = new Date();
    const clock = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
    setChatFeed((prev) => [
      ...prev,
      { name: "Devotee (You)", message: chatMessage, time: clock },
    ]);
    setChatMessage("");
  };

  return (
    <section id="live" className="py-24 md:py-32 mandala-pattern bg-surface-container-low/40">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Title */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-primary font-sans font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
            Trust & Transparency
          </span>
          <h2 className="font-serif text-3xl md:text-headline-lg text-on-surface mb-4 font-bold">
            Watch the Blessings Live
          </h2>
          <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
            Experience the tranquility of our sanctuaries in real-time. We believe that spiritual support thrives on absolute honesty. Monitor the health, feeding schedules, and compassionate rehabilitation of our cows.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Left panel: Simulated Web Player */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="relative rounded-4xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 aspect-video flex flex-col justify-end group">
              
              {/* Photo Background (Simulated streaming camera output) */}
              <img
                alt={activeCam.name}
                className="absolute inset-0 w-full h-full object-cover opacity-85 transition-opacity"
                src={activeCam.poster}
              />

              {/* Functional Interactive Overlay Canvas */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                width={640}
                height={360}
              />

              {/* Streaming Overlay Metadata */}
              <div className="absolute top-4 left-4 z-25 flex flex-wrap gap-2 items-center">
                <span className="flex items-center gap-1.5 bg-red-600 text-white px-3.5 py-1.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider video-pulse shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                  LIVE FEED
                </span>
                <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-sans font-bold tracking-wide border border-white/10 shadow-sm flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-secondary-fixed" />
                  1,842 watching
                </span>
              </div>

              {/* Streaming Location & Live Clock */}
              <div className="absolute bottom-4 left-4 z-25 bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/15 max-w-sm shadow-md text-white">
                <p className="text-[9px] uppercase tracking-wider opacity-70 font-sans font-semibold">
                  Camera Location
                </p>
                <p className="text-xs md:text-sm font-bold font-serif">
                  {activeCam.location} — {activeCam.subLocation}
                </p>
                <div className="flex items-center gap-1.5 mt-1 text-[10px] text-primary-fixed font-sans">
                  <Radio className="w-3 h-3 animate-pulse" />
                  <span>Kolkata UTC+5:30:</span>
                  <span className="font-mono font-bold tracking-wider">{currentTime}</span>
                </div>
              </div>

              {/* Audio and Fullscreen interactive panel */}
              <div className="absolute top-4 right-4 z-25 flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-black/75 transition-colors cursor-pointer"
                  title={isMuted ? "Unmute Ambient Stream" : "Mute Stream"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-green-400" />}
                </button>
              </div>

              {/* Grid overlay controls */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform cursor-pointer">
                  <Disc className="w-8 h-8 text-white animate-spin" />
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 h-1.5 bg-white/20 z-20">
                <div className="w-[85%] h-full bg-primary animate-pulse"></div>
              </div>
            </div>

            {/* Selector Cameras */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6">
              {cameras.map((cam) => (
                <button
                  key={cam.id}
                  onClick={() => setSelectedCam(cam.id)}
                  className={`p-3 md:p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between items-start text-left min-h-[90px] ${
                    selectedCam === cam.id
                      ? "bg-white border-primary shadow-md scale-[1.02]"
                      : "bg-white/50 border-outline-variant/20 hover:border-outline-variant/50 hover:bg-white"
                  }`}
                >
                  <span className="text-[9px] uppercase font-sans font-bold text-on-surface-variant block opacity-80 leading-none">
                    Cam Channel
                  </span>
                  <p className="text-[11px] md:text-xs font-serif font-bold text-on-surface mt-2 leading-tight">
                    {cam.name}
                  </p>
                  <span className="flex items-center gap-1 text-[8px] md:text-[9px] font-sans font-semibold text-secondary-fixed-variant mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                    Operational
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right panel: Live Prasad & blessings Chat */}
          <div className="w-full lg:w-80 bg-white rounded-3xl border border-outline-variant/10 shadow-lg p-5 flex flex-col justify-between h-[450px] lg:h-auto">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <h4 className="font-serif text-sm font-extrabold text-on-surface flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                    Devotion Prayers Chat
                  </h4>
                  <p className="text-[10.5px] font-sans text-on-surface-variant leading-tight mt-1">
                    Send prayers & flowers to our Gau Matas.
                  </p>
                </div>

                {/* Scrollable Chat feed */}
                <div className="space-y-3 max-h-[220px] lg:max-h-[300px] overflow-y-auto pr-1 no-scrollbar text-[11.5px]">
                  {chatFeed.map((msg, idx) => (
                    <div key={idx} className="bg-slate-50/75 p-2 rounded-xl border border-slate-100">
                      <div className="flex justify-between items-baseline mb-0.5">
                        <span className="font-bold text-primary font-sans">
                          {msg.name}
                        </span>
                        <span className="text-[9px] text-on-surface-variant/70 font-mono">
                          {msg.time}
                        </span>
                      </div>
                      <p className="text-on-surface font-sans leading-relaxed">
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trigger message input form */}
              <form onSubmit={handleSendMessage} className="mt-4 pt-3 border-t border-slate-100 flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Send blessings or prayers..."
                  maxLength={100}
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-primary focus:bg-white text-on-surface font-sans"
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-container-highest transition-colors cursor-pointer shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
