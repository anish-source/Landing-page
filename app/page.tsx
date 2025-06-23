import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Scan, FileSearch, GitBranch, CheckCircle, Zap, Users, Terminal, Lock } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-950/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SecurityFirst Lite</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                Features
              </Link>
              <Link href="#why" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                Why It Matters
              </Link>
              <Link href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                Contact
              </Link>
            </nav>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Now in Early Access
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Lightweight, Powerful Security for{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Agile Development Teams
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                A simple way to build security into your workflow—without slowing down your team or adding complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/25"
                >
                  Request Early Access
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  View Demo
                </Button>
              </div>
              <p className="text-sm text-slate-500">Join 750+ development teams securing their code</p>
            </div>

            <div className="relative">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-400 text-sm ml-4">SecurityFirst Lite Dashboard</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Vulnerability scan completed</span>
                    <span className="text-xs text-slate-500 ml-auto">2s ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">Git integration active</span>
                    <span className="text-xs text-slate-500 ml-auto">Connected</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg">
                    <Lock className="w-5 h-5 text-blue-400" />
                    <span className="text-slate-300">Audit logs exported</span>
                    <span className="text-xs text-slate-500 ml-auto">1m ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-slate-300 leading-relaxed">
              SecurityFirst Lite is a <strong className="text-white">self-serve security tool</strong> built
              specifically for small development teams who need automated, reliable security checks built into their
              CI/CD pipelines. With <strong className="text-cyan-400">no setup required</strong>,{" "}
              <strong className="text-cyan-400">no security team needed</strong>, and a{" "}
              <strong className="text-cyan-400">fast, lightweight</strong> approach, you can start securing your code in
              minutes, not weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Security that works with your workflow</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Three powerful features designed to integrate seamlessly into your development process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/25">
                  <Scan className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Automated Vulnerability Scanning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400 text-center leading-relaxed text-base">
                  Scan every commit for known vulnerabilities. Instant feedback, no configuration needed. Catch security
                  issues before they reach production.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800/50 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                  <FileSearch className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Developer-Friendly Audit Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400 text-center leading-relaxed text-base">
                  Exportable logs to track events and changes—simple, filterable, and always available. Perfect for
                  compliance and debugging.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                  <GitBranch className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white">One-Click Git Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400 text-center leading-relaxed text-base">
                  Connect GitHub or GitLab in under a minute. No pipeline changes or code modifications needed. Start
                  securing immediately.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section id="why" className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why SecurityFirst Lite matters</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Security shouldn't be an afterthought. Build it in from day one and avoid costly surprises later.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Build secure code from day one</h3>
                    <p className="text-slate-400">
                      Catch vulnerabilities early in the development cycle when they're easier and cheaper to fix.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Stay compliant effortlessly</h3>
                    <p className="text-slate-400">
                      Automated audit trails and security checks help you meet compliance requirements without extra
                      overhead.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Eliminate late-stage surprises</h3>
                    <p className="text-slate-400">
                      No more security issues discovered right before launch. Ship with confidence every time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Perfect for:</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">MVP development teams</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">Client project agencies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">Fast-moving SaaS teams</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">Startups without security experts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Your First Line of Defense Starts Here</h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Join the early access program and start building more secure applications today. No credit card required.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/25"
          >
            Request Early Access
          </Button>
          <p className="text-sm text-slate-500 mt-4">Setup takes less than 5 minutes</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">SecurityFirst™</span>
            </div>
            <nav className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="border-t border-slate-800/50 mt-8 pt-8 text-center">
            <p className="text-slate-500">&copy; 2025 SecurityFirst. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
