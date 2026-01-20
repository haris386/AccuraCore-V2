"use client";

export default function VideoModal({ isOpen, setIsOpen, videoUrl }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-black rounded-3xl p-2 shadow-xl w-[90%] max-w-[800px] max-h-[90vh] relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          ✕
        </button>

        <video
          src={videoUrl}
          controls
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </div>
  );
}
