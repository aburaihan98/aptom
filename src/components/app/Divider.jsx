export default function Divider() {
  return (
    <div className="bg-bg">
      <div className="Container">
        <div className="relative w-full h-1 flex items-center justify-center">
          {/* Gradient bar with rounded ends */}
          <div 
            className="absolute w-[70%] h-full rounded-full"
            style={{
              background: 'linear-gradient(to right, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.7) 20%, rgba(139, 92, 246, 0.9) 50%, rgba(139, 92, 246, 0.7) 80%, rgba(139, 92, 246, 0) 100%)'
            }}
          />
        </div>
      </div>
    </div>
  );
}