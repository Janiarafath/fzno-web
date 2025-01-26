const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FZNO</h3>
            <p className="text-gray-400">Transforming businesses through technology</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400">Email: contact@fzno.com</p>
            <p className="text-gray-400">Let's transform your business together</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} FZNO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

