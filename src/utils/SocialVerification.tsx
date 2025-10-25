import { useState, useEffect } from "react"
import { Check, ExternalLink, Twitter, MessageCircle, Instagram, Clock, Wallet } from "lucide-react"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { ConnectButton } from "@rainbow-me/rainbowkit"

interface SocialTask {
  id: string
  platform: string
  action: string
  url: string
  icon: React.ReactNode
  completed: boolean
  opened: boolean
  verifying: boolean
}

export const SocialVerification = () => {
  const [tasks, setTasks] = useState<SocialTask[]>([
    {
      id: "twitter",
      platform: "X (Twitter)",
      action: "Follow @NovaProtocol",
      url: "https://twitter.com/NovaProtocol",
      icon: <Twitter className="w-5 h-5" />,
      completed: false,
      opened: false,
      verifying: false
    },
    {
      id: "telegram",
      platform: "Telegram",
      action: "Join our channel",
      url: "https://t.me/NovaProtocol",
      icon: <MessageCircle className="w-5 h-5" />,
      completed: false,
      opened: false,
      verifying: false
    },
    {
      id: "instagram",
      platform: "Instagram",
      action: "Follow @NovaProtocol",
      url: "https://instagram.com/NovaProtocol",
      icon: <Instagram className="w-5 h-5" />,
      completed: false,
      opened: false,
      verifying: false
    }
  ])

  const [currentStep, setCurrentStep] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [captchaCompleted, setCaptchaCompleted] = useState(false)
  const [captchaChecked, setCaptchaChecked] = useState(false)
  const [connecting, setConnecting] = useState(false)
  const [walletConnected, setWalletConnected] = useState(false)

  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()

 useEffect(() => {
    if (isConnected && address) {
      setConnecting(false)
      setWalletConnected(true)
      // Removed the automatic redirect to "/"
    }
  }, [isConnected, address])


  // Simulate verification check
  const checkVerification = async (taskId: string) => {
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000))
    return Math.random() > 0.3
  }

  const handleTaskComplete = (taskId: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, completed: true, verifying: false } : task
      )
    )

    if (currentStep < tasks.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1)
      }, 500)
    } else {
      setTimeout(() => {
        setShowSuccess(true)
        setTimeout(() => {
          setShowCaptcha(true)
        }, 1000)
      }, 500)
    }
  }

  const openLink = (url: string, taskId: string) => {
    window.open(url, '_blank')
    
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, opened: true } : task
      )
    )
  }

  const handleVerify = async (taskId: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, verifying: true } : task
      )
    )

    try {
      const isVerified = await checkVerification(taskId)
      
      if (isVerified) {
        handleTaskComplete(taskId)
      } else {
        setTasks(prev => 
          prev.map(task => 
            task.id === taskId ? { ...task, verifying: false } : task
          )
        )
        alert("Verification failed. Please make sure you've completed the required action and try again.")
      }
    } catch (error) {
      setTasks(prev => 
        prev.map(task => 
          task.id === taskId ? { ...task, verifying: false } : task
        )
      )
      alert("Verification failed. Please try again.")
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setCaptchaChecked(checked)
    setCaptchaCompleted(checked)
  }

  const handleDisconnect = () => {
    disconnect()
    setWalletConnected(false)
  }

  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const allTasksCompleted = tasks.every(task => task.completed)
  const completedCount = tasks.filter(task => task.completed).length
  const canProceed = allTasksCompleted && captchaCompleted

  // const handleConnectWallet = () => {
  //   setShowWalletModal(true)
  // }

  // const closeWalletModal = () => {
  //   setShowWalletModal(false)
  //   setConnecting(false)
  // }

  // If wallet is connected, show success state
  if (walletConnected && isConnected) {
    return (
      <div className="w-full max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            All Set! 🎉
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Your wallet has been connected successfully
          </p>
        </div>

        {/* Completion Summary */}
        <div className="bg-gray-800/50 border border-gray-600/50 rounded-lg p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Social Tasks</span>
              <span className="text-green-500 font-medium">✓ {completedCount}/{tasks.length} Completed</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Human Verification</span>
              <span className="text-green-500 font-medium">✓ Verified</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Wallet Connection</span>
              <span className="text-green-500 font-medium">✓ Connected</span>
            </div>
            <hr className="border-gray-600" />
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Connected Address</span>
              <span className="text-blue-400 font-mono text-sm">
                {address && truncateAddress(address)}
              </span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-4 mb-6">
          <h4 className="text-blue-400 font-medium mb-2">What's Next?</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Your account has been successfully set up</li>
            <li>• You can now access all platform features</li>
            <li>• Redirecting to dashboard in a moment...</li>
          </ul>
        </div>

        <button
          onClick={handleDisconnect}
          className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Disconnect Wallet
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Join Our Community
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Complete these social tasks to proceed with registration
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Progress</span>
            <span className="text-sm text-gray-400">
              {completedCount}/{tasks.length}{captchaCompleted ? ' + Verified' : ''}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${((completedCount + (captchaCompleted ? 1 : 0)) / (tasks.length + 1)) * 100}%` 
              }}
            ></div>
          </div>
        </div>

        {/* Social Tasks */}
        <div className="space-y-4 mb-8">
          {tasks.map((task, index) => {
            const isActive = index === currentStep
            const isCompleted = task.completed
            const isPending = index > currentStep
            const isVerifying = task.verifying

            return (
              <div
                key={task.id}
                className={`
                  border rounded-lg p-4 transition-all duration-300
                  ${isCompleted 
                    ? 'bg-green-900/20 border-green-500/50' 
                    : isActive 
                      ? 'bg-blue-900/20 border-blue-500/50 ring-1 ring-blue-500/25' 
                      : 'bg-gray-800/50 border-gray-600/50'
                  }
                  ${isPending ? 'opacity-50' : 'opacity-100'}
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`
                      p-2 rounded-full transition-colors
                      ${isCompleted 
                        ? 'bg-green-500 text-white' 
                        : isVerifying
                          ? 'bg-yellow-500 text-white animate-pulse'
                        : isActive 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-600 text-gray-400'
                      }
                    `}>
                      {isCompleted ? (
                        <Check className="w-5 h-5" />
                      ) : isVerifying ? (
                        <Clock className="w-5 h-5" />
                      ) : (
                        task.icon
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">
                        {task.platform}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {task.action}
                      </p>
                    </div>
                  </div>

                  {!isCompleted && isActive && (
                    <div className="flex items-center space-x-2">
                      {!task.opened ? (
                        <button
                          onClick={() => openLink(task.url, task.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                        >
                          <span>Open</span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleVerify(task.id)}
                          disabled={isVerifying}
                          className={`
                            px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2
                            ${isVerifying 
                              ? 'bg-yellow-600 text-white cursor-not-allowed' 
                              : 'bg-green-600 hover:bg-green-700 text-white'
                            }
                          `}
                        >
                          {isVerifying ? (
                            <>
                              <Clock className="w-4 h-4 animate-spin" />
                              <span>Verifying...</span>
                            </>
                          ) : (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Verify</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}

                  {isCompleted && (
                    <div className="text-green-500 font-medium text-sm">
                      Completed ✓
                    </div>
                  )}

                  {isPending && (
                    <div className="text-gray-500 text-sm">
                      Waiting...
                    </div>
                  )}

                  {!isCompleted && !isActive && !isPending && (
                    <div className="text-yellow-500 text-sm">
                      {isVerifying ? 'Verifying...' : task.opened ? 'Ready to verify' : 'Waiting...'}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Success Message */}
        {showSuccess && !showCaptcha && (
          <div className="bg-green-900/20 border border-green-500/50 rounded-lg p-4 mb-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Check className="w-6 h-6 text-green-500" />
              <span className="text-green-500 font-medium">All Tasks Completed!</span>
            </div>
            <p className="text-gray-400 text-sm">Please complete the human verification below.</p>
          </div>
        )}

        {/* Simple CAPTCHA Checkbox */}
        {showCaptcha && (
          <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="captcha-checkbox"
                checked={captchaChecked}
                onChange={(e) => handleCheckboxChange(e.target.checked)}
                className="w-6 h-6 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
              />
              
              <div className="flex-1">
                <label htmlFor="captcha-checkbox" className="text-white font-medium cursor-pointer">
                  I'm not a robot
                </label>
              </div>
              
              <div className="flex flex-col items-center text-xs text-gray-400">
                <div className="w-8 h-8 bg-gray-700 rounded border border-gray-600 flex items-center justify-center mb-1">
                  🛡️
                </div>
                <span>reCAPTCHA</span>
              </div>
            </div>
          </div>
        )}

        {/* Connect Wallet Section */}
        {canProceed ? (
          <div className=" p-1">
            

            {/* Connection Status */}
            {connecting && (
              <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 mb-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-yellow-500 font-medium">Connecting...</span>
                </div>
                <p className="text-gray-400 text-sm">Please check your wallet and approve the connection.</p>
              </div>
            )}

            {/* RainbowKit Connect Button */}
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                const ready = mounted && authenticationStatus !== 'loading'
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === 'authenticated')

                return (
                  <div
                    {...(!ready && {
                      'aria-hidden': true,
                      'style': {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <button
                            onClick={() => {
                              setConnecting(true)
                              openConnectModal()
                            }}
                            type="button"
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white   font-medium py-3 px-4 rounded-lg text-sm sm:text-base ransition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center "
                          >
                            
                            <Wallet className="w-5 h-5" />
                            <span>Connect Wallet</span>
                          </button>
                        )
                      }

                      if (chain.unsupported) {
                        return (
                          <button
                            onClick={openChainModal}
                            type="button"
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-6 rounded-lg transition-colors"
                          >
                            Wrong network
                          </button>
                        )
                      }

                      return (
                        <div className="flex flex-col space-y-3">
                          <button
                            onClick={openChainModal}
                            className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors w-full"
                          >
                            {chain.hasIcon && (
                              <div
                                className="w-4 h-4 rounded-full overflow-hidden"
                                style={{
                                  background: chain.iconBackground,
                                }}
                              >
                                {chain.iconUrl && (
                                  <img
                                    alt={chain.name ?? 'Chain icon'}
                                    src={chain.iconUrl}
                                    className="w-4 h-4"
                                  />
                                )}
                              </div>
                            )}
                            <span>{chain.name}</span>
                          </button>

                          <button
                            onClick={openAccountModal}
                            type="button"
                            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors w-full"
                          >
                            {account.displayName}
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ''}
                          </button>
                        </div>
                      )
                    })()}
                  </div>
                )
              }}
            </ConnectButton.Custom>
          </div>
        ) : (
          <button
            disabled
            className="w-full bg-gray-700 text-gray-400 cursor-not-allowed font-medium py-3 px-4 rounded-lg text-sm sm:text-base"
          >
            {!allTasksCompleted 
              ? 'Complete All Tasks to Continue'
              : 'Complete Human Verification to Continue'
            }
          </button>
        )}
      </div>


    </>
  )
}