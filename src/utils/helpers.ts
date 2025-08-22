export const formatCurrency = (amount: number, currency = 'INR'): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(amount)
}

export const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
  window.scrollTo({
    top: 0,
    behavior
  })
}

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength 
    ? `${text.substring(0, maxLength)}...` 
    : text
}

// src/utils/helpers.ts - Add this function to the existing file

export const submitRSVP = async (rsvpData: any): Promise<Response> => {
  // In a real application, this would be your API endpoint
  // For now, we'll simulate an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate successful submission 90% of the time
      if (Math.random() > 0.1) {
        resolve(new Response(JSON.stringify({ success: true }), { status: 200 }));
      } else {
        reject(new Error('Failed to submit RSVP'));
      }
    }, 1500);
  });
};