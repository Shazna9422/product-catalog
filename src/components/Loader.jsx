function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
        <p className="text-lg font-semibold text-gray-600">
          Loading Products...
        </p>
      </div>
    </div>
  );
}

export default Loader;