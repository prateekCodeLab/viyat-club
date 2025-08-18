import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import CTAButton from './CTAButton'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Thank you for subscribing!')
      setEmail('')
    } catch (error) {
      toast.error('Subscription failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-gray-300 mb-6">
        Subscribe to our newsletter for exclusive offers and updates.
      </p>
      <input
        type="email"
        id="newsletter-email"
        name="newsletter_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-viyat-gold text-gray-800"
        required
        disabled={isSubmitting}
        autoComplete="email"
      />
      <CTAButton
        text={isSubmitting ? 'Subscribing...' : 'Subscribe'}
        type="submit"
        variant="gold-outline"
        size="full"
        disabled={isSubmitting}
        loading={isSubmitting}
      />
    </form>
  )
}

export default NewsletterForm