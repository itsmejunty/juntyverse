
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Smartphone, Building2, QrCode, Shield, CheckCircle, ArrowLeft } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: string;
  currency: string;
}

type PaymentMethod = 'upi' | 'card' | 'netbanking' | null;

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, total, currency }) => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // UPI
    upiId: '',
    
    // Card
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    cardHolderName: '',
    
    // Net Banking
    selectedBank: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Auto close after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedMethod(null);
        onClose();
      }, 3000);
    }, 2000);
  };

  const resetModal = () => {
    setSelectedMethod(null);
    setIsSuccess(false);
    setIsProcessing(false);
    setFormData({
      upiId: '',
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
      cardHolderName: '',
      selectedBank: ''
    });
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  const banks = [
    'State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Punjab National Bank',
    'Bank of Baroda', 'Canara Bank', 'Union Bank of India', 'Bank of India', 'Indian Bank'
  ];

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
            <p className="text-muted-foreground mb-4">
              Your order has been confirmed and will be delivered soon.
            </p>
            <Badge className="bg-green-100 text-green-800 px-4 py-2">
              Order ID: #STU{Math.random().toString().substr(2, 8)}
            </Badge>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {selectedMethod && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSelectedMethod(null)}
                className="p-1"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            )}
            <Shield className="w-5 h-5 text-green-600" />
            Secure Payment - {total}
          </DialogTitle>
        </DialogHeader>

        {!selectedMethod ? (
          // Payment Method Selection
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-muted-foreground">Choose your preferred payment method</p>
            </div>

            <div className="grid gap-4">
              {/* UPI Payment */}
              <Card 
                className="cursor-pointer border-2 hover:border-purple-300 hover:shadow-md transition-all duration-200"
                onClick={() => setSelectedMethod('upi')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">UPI Payment</h3>
                      <p className="text-sm text-muted-foreground">Pay using Google Pay, PhonePe, Paytm, or any UPI app</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Instant</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Debit/Credit Card */}
              <Card 
                className="cursor-pointer border-2 hover:border-purple-300 hover:shadow-md transition-all duration-200"
                onClick={() => setSelectedMethod('card')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">Debit/Credit Card</h3>
                      <p className="text-sm text-muted-foreground">Visa, Mastercard, RuPay, American Express</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Secure</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Net Banking */}
              <Card 
                className="cursor-pointer border-2 hover:border-purple-300 hover:shadow-md transition-all duration-200"
                onClick={() => setSelectedMethod('netbanking')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">Net Banking</h3>
                      <p className="text-sm text-muted-foreground">Pay directly from your bank account</p>
                    </div>
                    <Badge className="bg-orange-100 text-orange-800">Trusted</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <Shield className="w-4 h-4 inline mr-1" />
              Your payment information is encrypted and secure
            </div>
          </div>
        ) : (
          // Payment Forms
          <div className="space-y-6">
            {selectedMethod === 'upi' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-purple-600" />
                    UPI Payment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input
                      id="upiId"
                      placeholder="yourname@paytm / yourname@googlepay"
                      value={formData.upiId}
                      onChange={(e) => handleInputChange('upiId', e.target.value)}
                    />
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <QrCode className="w-5 h-5 text-purple-600" />
                      <span className="font-medium">Alternative: Scan QR Code</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Open your UPI app and scan the QR code to pay
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedMethod === 'card' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    Card Payment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="expiryMonth">Month</Label>
                      <Input
                        id="expiryMonth"
                        placeholder="MM"
                        value={formData.expiryMonth}
                        onChange={(e) => handleInputChange('expiryMonth', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="expiryYear">Year</Label>
                      <Input
                        id="expiryYear"
                        placeholder="YY"
                        value={formData.expiryYear}
                        onChange={(e) => handleInputChange('expiryYear', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="cardHolderName">Card Holder Name</Label>
                    <Input
                      id="cardHolderName"
                      placeholder="John Doe"
                      value={formData.cardHolderName}
                      onChange={(e) => handleInputChange('cardHolderName', e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedMethod === 'netbanking' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-orange-600" />
                    Net Banking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="bank">Select Your Bank</Label>
                    <select
                      id="bank"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.selectedBank}
                      onChange={(e) => handleInputChange('selectedBank', e.target.value)}
                    >
                      <option value="">Choose your bank</option>
                      {banks.map((bank, index) => (
                        <option key={index} value={bank}>{bank}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      You will be redirected to your bank's secure login page to complete the payment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            <Separator />

            {/* Payment Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Payment Summary</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Total Amount:</span>
                  <span className="font-semibold">{total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing Fee:</span>
                  <span className="text-green-600">FREE</span>
                </div>
              </div>
            </div>

            {/* Payment Button */}
            <Button 
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 py-3 text-lg font-semibold"
              onClick={handlePayment}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing Payment...
                </div>
              ) : (
                `Pay ${total}`
              )}
            </Button>

            <div className="text-center text-xs text-muted-foreground">
              <Shield className="w-3 h-3 inline mr-1" />
              This is a demo payment system. No actual transaction will be processed.
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
