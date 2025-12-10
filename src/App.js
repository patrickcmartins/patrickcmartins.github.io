import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, 
  ShieldCheck, 
  GitBranch, 
  FolderOpen, 
  GraduationCap,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  Zap,
  Star,
  Award,
  Users,
  Clock,
  Send,
  Landmark
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const [email, setEmail] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        controls.start({ backgroundColor: 'rgba(17, 24, 39, 0.95)', backdropFilter: 'blur(12px)' });
      } else {
        controls.start({ backgroundColor: 'transparent', backdropFilter: 'none' });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const handleDemoRequest = (e) => {
    e.preventDefault();
    // In a real implementation, this would connect to a backend service
    alert(`Solicitação de demonstração enviada para ${email}! Entraremos em contato em até 2 horas.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed w-full z-50 py-4 transition-all duration-300"
        initial={{ backgroundColor: 'transparent' }}
        animate={controls}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-1.5 rounded-xl">
                <ShieldCheck className="w-8 h-8 text-gray-900" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                NexusPulse
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {['Soluções', 'Benefícios', 'Depoimentos', 'Preços', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white font-medium transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
              <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/20">
                Começar Grátis
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed inset-0 z-50 bg-gray-950/95 backdrop-blur-sm md:hidden"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8 text-gray-300 hover:text-white" />
              </button>
            </div>
            <div className="flex flex-col items-center space-y-10 mt-16">
              {['Soluções', 'Benefícios', 'Depoimentos', 'Preços', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-medium text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/30">
                Começar Grátis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-purple-500/30 bg-purple-900/20">
              <span className="text-purple-400 mr-2">🔥</span>
              Plataforma #1 para conteúdo adulto no Brasil
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                Domine seu negócio
              </span>{" "}
              de conteúdo adulto com automação profissional
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Pare de perder vendas com pagamentos bloqueados e riscos legais. Tenha uma plataforma especializada que resolve tudo em um só lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-xl shadow-purple-500/30 flex items-center justify-center">
                Teste Grátis por 14 Dias <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-gray-800/50 border border-gray-700 px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
                <Send className="mr-2 w-5 h-5" /> Solicitar Demonstração
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[ 
                { icon: <CheckCircle className="w-4 h-4 text-emerald-400" />, text: "Sem bloqueios de Pix" },
                { icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />, text: "100% LGPD Compliance" },
                { icon: <Zap className="w-4 h-4 text-emerald-400" />, text: "Ativação em 24h" },
                { icon: <Star className="w-4 h-4 text-emerald-400" />, text: "Suporte 24/7 especializado" }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  {item.icon}
                  <span className="ml-2 text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            {...fadeInUp}
            className="relative hidden md:block"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative bg-gray-900 rounded-3xl border border-purple-900/50 p-6 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-purple-400">Painel NexusPulse</h3>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: "R$ 24.892,00", label: "Processado este mês", icon: <CreditCard className="w-6 h-6 text-purple-400" /> },
                    { value: "98,7%", label: "Taxa de sucesso", icon: <CheckCircle className="w-6 h-6 text-emerald-400" /> },
                    { value: "42", label: "Canais conectados", icon: <FolderOpen className="w-6 h-6 text-cyan-400" /> },
                    { value: "3", label: "Alertas de compliance", icon: <ShieldCheck className="w-6 h-6 text-amber-400" /> }
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        {stat.icon}
                        <span className="ml-2 text-purple-400">{stat.label}</span>
                      </div>
                      <div className="font-bold text-xl">{stat.value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-900/30 rounded-xl p-5 mb-6">
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-amber-400 mr-2" />
                    <h4 className="font-bold">Recomendação do Sistema</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    Detectamos 3 novos gateways disponíveis para sua região com taxas 15% mais baixas. 
                    <button className="ml-1 text-purple-400 font-medium hover:underline">Ver detalhes →</button>
                  </p>
                </div>
                
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
                        <span className="text-sm">Transação #{1000 + item * Math.floor(Math.random() * 100)}</span>
                      </div>
                      <span className="font-bold text-emerald-400">R$ {(Math.random() * 500 + 100).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="soluções" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que o{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                NexusPulse
              </span>{" "}
              é a escolha certa?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Desenvolvido por especialistas do mercado adulto brasileiro, com tecnologia de ponta e suporte humanizado
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[ 
              {
                icon: <Landmark className="w-12 h-12 text-purple-400" />,
                title: "Pagamentos que Funcionam",
                description: "Acesso exclusivo a 7 gateways especializados com suporte a Pix e cartões internacionais, com taxa de sucesso 3x maior que soluções tradicionais.",
                stat: "+87% conversões"
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-emerald-400" />,
                title: "Proteção Jurídica Inteligente",
                description: "Monitoramento automático de LGPD e Lei ECA Digital com alertas em tempo real e relatórios prontos para auditorias.",
                stat: "R$2.1M em multas evitadas"
              },
              {
                icon: <Users className="w-12 h-12 text-cyan-400" />,
                title: "Equipe de Suporte Especializada",
                description: "Time dedicado com experiência no mercado adulto, disponível 24/7 via chat, WhatsApp e chamada de vídeo.",
                stat: "Resposta em <2min"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="inline-block p-3 bg-purple-900/30 rounded-2xl mb-6 group-hover:bg-purple-900/50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <div className="inline-block px-4 py-2 bg-purple-900/50 text-purple-400 rounded-full font-semibold">
                  {item.stat}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefícios" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Benefícios que{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                transformam seu negócio
              </span>
            </motion.h2>
            <motion.p {...fadeInUp} className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tecnologia desenvolvida especificamente para as necessidades do mercado adulto brasileiro
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fadeInUp} className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <ShieldCheck className="w-8 h-8 text-emerald-400 mr-3" />
                  Conformidade Garantida
                </h3>
                <p className="text-gray-300 mb-6">
                  Nosso sistema monitora automaticamente todas as mudanças na legislação brasileira (LGPD e Lei ECA Digital) e adapta suas operações em tempo real, gerando relatórios completos para auditorias.
                </p>
                <ul className="space-y-3">
                  {[ 
                    "Atualizações automáticas de termos de uso", 
                    "Criptografia de dados de usuários", 
                    "Registro detalhado de consentimentos",
                    "Alertas de risco antes de publicar conteúdo"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0 mr-3" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div {...fadeInUp} className="mt-12">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <GitBranch className="w-8 h-8 text-amber-400 mr-3" />
                  Automação Inteligente
                </h3>
                <p className="text-gray-300 mb-6">
                  Economize até 20 horas por semana com automações personalizadas que gerenciam postagens, cobranças recorrentes, comunicação com fãs e relatórios financeiros.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[ "Agendamento multiplataforma", "Cobranças recorrentes", "Respostas automáticas", "Relatórios diários" ].map((item, index) => (
                    <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 text-center text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div {...fadeInUp} className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl overflow-hidden">
                {/* Simulated dashboard interface */}
                <div className="h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex flex-col items-center justify-center p-6 border border-gray-700">
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-bold text-purple-400 mb-2">Simulação de Resultados</h4>
                    <p className="text-gray-400">Média de clientes após 3 meses</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                    {[ 
                      { label: "Aumento de Receita", value: "+73%", color: "text-emerald-400" },
                      { label: "Tempo Economizado", value: "-18h/sem", color: "text-cyan-400" },
                      { label: "Redução de Chargebacks", value: "-64%", color: "text-amber-400" },
                      { label: "Satisfação do Cliente", value: "98%", color: "text-purple-400" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                        <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    Dados atualizados diariamente com base em 1.247 clientes ativos
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-purple-500/30 bg-purple-900/20">
              <Star className="w-4 h-4 text-amber-400 inline mr-1" />
              Resultados Reais
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossos clientes{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                conquistaram
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Histórias de sucesso de criadores e estúdios que transformaram suas operações
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[ 
              {
                name: "Isabella M.",
                role: "Criadora Top 0.1% OnlyFans",
                content: "Recuperei R$ 43.500 em vendas bloqueadas pelo Pix e reduzi 15 horas semanais de trabalho manual. O suporte resolveu um problema crítico às 3AM quando precisei!",
                platform: "OnlyFans & Fanvue",
                image: "https://placehold.co/100x100/3b82f6/ffffff?text=IM"
              },
              {
                name: "Studio Liber",
                role: "Estúdio com 28 modelos",
                content: "O módulo de compliance nos salvou de uma multa de R$ 250.000. Hoje gerenciamos 42 perfis com apenas 2 pessoas graças à automação.",
                platform: "Multiplataforma",
                image: "https://placehold.co/100x100/10b981/ffffff?text=SL"
              },
              {
                name: "Rafael K.",
                role: "Criador financeiro",
                content: "Aumentei minha receita em 89% em 3 meses ao conectar novos gateways. O dashboard financeiro é tão claro que até meu contador aprova!",
                platform: "Privacy & Zexter",
                image: "https://placehold.co/100x100/f59e0b/ffffff?text=RK"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 relative group hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center border-2 border-purple-500/30 mr-4 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-purple-400 text-sm">{testimonial.role}</div>
                    <div className="text-xs text-gray-500 mt-1">{testimonial.platform}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div {...fadeInUp} className="text-center mt-16">
            <button className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300 transition-colors text-lg">
              Ver mais histórias de sucesso <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preços" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-purple-500/30 bg-purple-900/20">
              <Zap className="w-4 h-4 text-cyan-400 inline mr-1" />
              Planos Flexíveis
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Invista no crescimento do seu{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                negócio
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Planos adaptados para diferentes tamanhos de operação, todos com período de teste gratuito
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[ 
              {
                name: "Essencial",
                price: "R$ 87/mês",
                description: "Perfeito para iniciantes",
                features: [
                  "Até 3 plataformas conectadas",
                  "2 gateways de pagamento",
                  "Suporte por chat",
                  "Relatórios básicos",
                  "Automação simples"
                ],
                cta: "Começar Grátis",
                popular: false
              },
              {
                name: "Profissional",
                price: "R$ 247/mês",
                description: "Para criadores estabelecidos",
                features: [
                  "Plataformas ilimitadas",
                  "5 gateways de pagamento",
                  "Suporte 24/7 por WhatsApp",
                  "Relatórios avançados",
                  "Automação completa",
                  "Módulo de compliance"
                ],
                cta: "Testar Grátis",
                popular: true
              },
              {
                name: "Estúdio",
                price: "Sob consulta",
                description: "Solução completa para agências",
                features: [
                  "Gestão de múltiplos perfis",
                  "Acesso a todos os gateways",
                  "Suporte dedicado",
                  "Relatórios personalizados",
                  "Automação avançada",
                  "Consultoria jurídica"
                ],
                cta: "Falar com especialista",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className={`relative bg-gray-900 border ${
                  plan.popular ? 'border-purple-500' : 'border-gray-800'
                } rounded-2xl p-8 flex flex-col ${
                  plan.popular ? 'scale-105 shadow-xl shadow-purple-500/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      MAIS POPULAR
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-extrabold mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 text-white' 
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
          
          <motion.div {...fadeInUp} className="text-center mt-12 max-w-3xl mx-auto bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-lg text-gray-300 mb-4">
              <span className="text-emerald-400 font-bold">✓</span> Todos os planos incluem 14 dias grátis
            </p>
            <p className="text-lg text-gray-300 mb-4">
              <span className="text-emerald-400 font-bold">✓</span> Cancelamento fácil a qualquer momento
            </p>
            <p className="text-lg text-gray-300">
              <span className="text-emerald-400 font-bold">✓</span> Migração gratuita de outras plataformas
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/30 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp} className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                multiplicar seus resultados?
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Comece hoje mesmo com 14 dias grátis e experimente todos os benefícios da plataforma líder para conteúdo adulto no Brasil.
            </p>
          </motion.div>
          
          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-xl shadow-purple-500/40 flex items-center justify-center min-w-[240px]">
              Começar Teste Grátis <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/20 transition-all duration-300 min-w-[240px]">
              Ver Demonstração em Vídeo
            </button>
          </motion.div>
          
          <motion.div {...fadeInUp} className="inline-block bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <div className="flex items-center">
              <ShieldCheck className="w-5 h-5 text-emerald-400 mr-3" />
              <span className="text-gray-300">Pagamento seguro • Sem cartão de crédito necessário para teste • Cancelamento em 1 clique</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                frequentes
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Respostas diretas para suas principais dúvidas
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {[ 
              {
                question: "Preciso ter conhecimento técnico para usar o NexusPulse?",
                answer: "Não. Nossa plataforma foi desenvolvida para ser intuitiva mesmo para iniciantes. Oferecemos treinamento completo e suporte 24/7 para ajudar você a começar rapidamente."
              },
              {
                question: "Como vocês garantem a segurança dos meus dados financeiros?",
                answer: "Utilizamos criptografia de ponta a ponta, servidores localizados no Brasil e certificação PCI DSS para proteger todas as transações. Nenhum dado sensível é armazenado em nossos servidores."
              },
              {
                question: "Posso conectar minha conta atual do OnlyFans e outras plataformas?",
                answer: "Sim! Oferecemos migração gratuita e assistida de todas as suas contas atuais. Nosso sistema se integra com OnlyFans, Fanvue, Privacy, Zexter, Instagram e outras plataformas populares."
              },
              {
                question: "O que acontece após o período de teste gratuito?",
                answer: "Você recebe um lembrete 3 dias antes do fim do teste. Se decidir continuar, seleciona seu plano e forma de pagamento. Se não quiser continuar, basta cancelar - não cobramos nada."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
              >
                <button className="flex justify-between items-center w-full p-6 text-left font-bold text-lg hover:bg-gray-800/50 transition-colors">
                  <span>{faq.question}</span>
                  <ArrowRight className="w-6 h-6 text-purple-400" />
                </button>
                <div className="px-6 pb-6 pt-0 text-gray-300">
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div {...fadeInUp} className="text-center mt-12">
            <button className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300 transition-colors text-lg">
              Ver todas as perguntas frequentes <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-purple-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp} className="mb-8">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-purple-500/30 bg-purple-900/20">
              <Star className="w-4 h-4 text-amber-400 inline mr-1" />
              Última Chance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transforme seu negócio em{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                14 dias
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Junte-se a mais de 1.300 criadores e estúdios que já usam o NexusPulse para crescer com segurança e eficiência.
            </p>
          </motion.div>
          
          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
            <div className="w-full">
              <input
                type="email"
                placeholder="Seu email profissional"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button 
              onClick={handleDemoRequest}
              className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-xl shadow-purple-500/30 min-w-[200px] flex items-center justify-center"
            >
              Solicitar Acesso <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
          
          <motion.div {...fadeInUp} className="mt-8 text-sm text-gray-400 max-w-md mx-auto">
            <p className="flex items-start">
              <ShieldCheck className="w-4 h-4 text-emerald-400 mr-2 mt-1 flex-shrink-0" />
              Seus dados estão protegidos. Não compartilhamos informações com terceiros. Cancelamento fácil a qualquer momento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-1.5 rounded-xl">
                  <ShieldCheck className="w-8 h-8 text-gray-900" />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                  NexusPulse
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                A plataforma definitiva para automação e compliance no mercado adulto brasileiro.
              </p>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-purple-400 border border-gray-700 hover:border-purple-500 transition-all">
                    <span>i</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Soluções</h3>
              <ul className="space-y-3">
                {['Pagamentos', 'Compliance Legal', 'Automação', 'Centralização'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" /> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Recursos</h3>
              <ul className="space-y-3">
                {['MultiGateway', 'LGPD/ECA', 'Workflows', 'Canais Unificados', 'Suporte 24/7'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" /> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Contato</h3>
              <ul className="space-y-3">
                {['suporte@nexuspulse.com.br', '+55 (11) 99999-9999', 'São Paulo, Brasil'].map((item, index) => (
                  <li key={index}>
                    <a href={index === 0 ? 'mailto:suporte@nexuspulse.com.br' : '#'} className="text-gray-300 hover:text-purple-400 transition-colors flex items-start">
                      <ArrowRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /> 
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
            <p className="mb-2">© 2025 NexusPulse Tecnologia. Todos os direitos reservados.</p>
            <p className="mb-4">Plataforma especializada para conteúdo adulto - 18+ somente</p>
            <div className="flex flex-wrap justify-center gap-6">
              {['Termos de Uso', 'Política de Privacidade', 'LGPD Compliance', 'Segurança de Dados', 'Mapa do Site'].map((item) => (
                <a key={item} href="#" className="hover:text-purple-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
