export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0b0c0e] px-5 pt-24 text-white">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#24262b] border-t-[#c2f800]" />

        <p className="mt-4 font-[Oswald] text-lg font-bold">
          LOADING...
        </p>

        <p className="mt-1 text-xs text-[#85878b]">
          Loading workouts...
        </p>
      </div>
    </main>
  );
}