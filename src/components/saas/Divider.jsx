export default function Divider() {
  return (
    <div className="bg-bg py-6">
      <div className="">
        <div className="relative w-full flex items-center justify-center">
          {/* Glow/blur layer */}
          <div
            className="absolute w-[70%] h-[12px] rounded-full blur-md"
            style={{
              background:
                "linear-gradient(to right, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.4) 30%, rgba(139, 92, 246, 0.5) 50%, rgba(139, 92, 246, 0.4) 70%, rgba(139, 92, 246, 0) 100%)",
            }}
          />
          {/* Main thin line */}
          <div
            className="absolute w-[70%] h-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(to right, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.6) 30%, rgba(139, 92, 246, 0.8) 50%, rgba(139, 92, 246, 0.6) 70%, rgba(139, 92, 246, 0) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
