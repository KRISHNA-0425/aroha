import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(form);
    formData.append("access_key", "12b4257b-cef6-47a4-99b6-44a49dd9c641");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully! I will get back to you soon.");
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong! Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E8E3F7] pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl relative overflow-hidden border border-[#9E8EB3]/30 bg-[#E8E3F7]/80 backdrop-blur-xl"
        style={{ boxShadow: "0 4px 30px rgba(7, 5, 70, 0.08)" }}
      >
        {/* Subtle background blobs */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#9E8EB3]/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#3D3B63]/10 blur-3xl" />

        <div className="relative z-10 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-serif text-[#070546] mb-6 text-center">Get in Touch</h1>
          <p className="text-center text-[#3D3B63] mb-10 max-w-xl mx-auto">
            I am here to hold space for you. Send me a message, and I'll get back to you as soon as I can.
          </p>
          
          <form onSubmit={onSubmit} className="flex flex-col gap-6 max-w-md mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#070546] mb-2">Name</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                required 
                className="w-full p-3 bg-transparent border border-[#9E8EB3]/50 rounded-xl focus:outline-none focus:border-[#3D3B63] focus:ring-1 focus:ring-[#3D3B63] transition-all text-[#070546] placeholder:text-[#9E8EB3]" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base font-bold text-[#070546] mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                required 
                className="w-full p-3 bg-transparent border border-[#9E8EB3]/50 rounded-xl focus:outline-none focus:border-[#3D3B63] focus:ring-1 focus:ring-[#3D3B63] transition-all text-[#070546] placeholder:text-[#9E8EB3]" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-base font-bold text-[#070546] mb-2">Message</label>
              <textarea  
                id="message"
                name="message" 
                required 
                rows={5} 
                className="w-full p-3 bg-transparent border border-[#9E8EB3]/50 rounded-xl focus:outline-none focus:border-[#3D3B63] focus:ring-1 focus:ring-[#3D3B63] transition-all resize-none text-[#070546] placeholder:text-[#9E8EB3]" 
              ></textarea>
            </div>

            {/* Hidden fields */}
            <input type="hidden" name="subject" value="New Contact from Aroha Sanctuary" />
            <input type="hidden" name="from_name" value="Aroha Website" />

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#070546] text-[#E8E3F7] py-4 px-8 rounded-xl hover:bg-[#3D3B63] transition-colors disabled:opacity-70 disabled:cursor-not-allowed font-bold text-lg mt-2 shadow-[0_0_20px_rgba(7,5,70,0.25)]"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {result && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-center text-sm mt-4 ${result.includes("Successfully") ? "text-green-700" : "text-[#3D3B63]"}`}
              >
                {result}
              </motion.p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;