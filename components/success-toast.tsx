export const SuccessToast = () => (
  <div
    className="absolute flex items-center w-full max-w-xs p-4 mb-4 bg-black border-2 rounded-lg shadow-md right-4 bottom-10 border-fuchsia-400 shadow-fuchsia-200 animate-bounce"
    role="alert"
  >
    <div className="inline-flex items-center justify-center flex-shrink-0 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden
        className="w-6 h-6 text-fuchsia-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    </div>
    <div className="ml-3 text-2xl font-normal text-fuchsia-200">
      Task saved!
    </div>
  </div>
)
