import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Clock, Shield, TrendingUp, CheckCircle, FileText, Calendar, BarChart3, Target } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import WhatsAppButton from "@/components/WhatsAppButton";
import logo from "../../logo.png";
import logoBranco from "../../logo-branco.png";
import Jean from "../../Jean.png";
import Soares from "../../Soares.png";

const Index = () => {
  const { shouldUseDarkLogo } = useTheme();
  const currentLogo = shouldUseDarkLogo ? logo : logoBranco;

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5541998243692?text=Vim%20através%20do%20Site%20e%20quero%20minha%20consultoria%20Gratuita.",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-background/60 backdrop-blur-xl border border-border/30 rounded-full shadow-2xl px-6 py-3">
          <img src={currentLogo} alt="Swift Soft" className="h-8 md:h-10" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hero-bg via-hero-bg/95 to-hero-bg/90 text-hero-foreground py-16 md:py-20 lg:py-28 pt-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Monte seu <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Squad de Desenvolvimento</span> em Semanas
              </h1>
              <p className="text-xl md:text-2xl text-hero-foreground/90 font-medium">
                — com <strong className="text-primary">até 40% de economia</strong>
              </p>
              <p className="text-lg md:text-xl text-hero-foreground/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Se contratar desenvolvedores leva 3 a 6 meses, sua empresa está perdendo tempo e receita. 
                Nós entregamos squads prontos em até 3 semanas, com governança executiva e custo até 40% menor que in-house.
              </p>
              
              <div className="flex justify-center lg:justify-start pt-4">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                  onClick={handleWhatsAppClick}
                >
                  Consultoria Gratuita
                  <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
                </Button>
              </div>
            </div>
            
            <div className="relative mt-12 lg:mt-0 order-first lg:order-last">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 rounded-3xl blur-3xl"></div>
                
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl p-8 md:p-12 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-hero-foreground mb-2">Nossa Liderança</h3>
                    <p className="text-hero-foreground/70 text-lg">Especialistas em tecnologia e gestão</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 md:gap-12">
                    <div className="text-center group">
                      <div className="relative mb-6">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        
                        {/* Photo frame */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl group-hover:border-white/50 transition-all duration-300">
                          <img 
                            src={Jean} 
                            alt="Jean - CEO" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        
                        {/* Status indicator */}
                        <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg"></div>
                      </div>
                      <h4 className="font-bold text-xl md:text-2xl text-hero-foreground mb-1">Jean</h4>
                      <p className="text-primary font-semibold text-lg">CEO & Founder</p>
                      <p className="text-hero-foreground/70 text-sm mt-2">Estratégia & Visão</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="relative mb-6">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        
                        {/* Photo frame */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl group-hover:border-white/50 transition-all duration-300">
                          <img 
                            src={Soares} 
                            alt="Soares - CTO" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        
                        {/* Status indicator */}
                        <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg"></div>
                      </div>
                      <h4 className="font-bold text-xl md:text-2xl text-hero-foreground mb-1">Soares</h4>
                      <p className="text-primary font-semibold text-lg">CTO & Co-Founder</p>
                      <p className="text-hero-foreground/70 text-sm mt-2">Tecnologia & Execução</p>
                    </div>
                  </div>
                  
                  {/* Bottom decoration */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-hero-foreground/60 text-sm font-medium">
                      +8 anos de experiência em desenvolvimento e gestão de equipes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground py-4 md:py-5">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold text-base md:text-lg">
            Temos poucos Devs sênior disponíveis este mês. Cada mês de atraso pode custar milhões em receita.
          </p>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Problemas que Resolvemos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-background to-muted/50">
              <CardContent className="space-y-4 md:space-y-6 p-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                  <Clock className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">Contratação lenta</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Meses para contratar devs → <strong className="text-primary">nós entregamos em semanas</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-background to-muted/50">
              <CardContent className="space-y-4 md:space-y-6 p-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">Custos inflados</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    EUA = US$135/h vs. <strong className="text-primary">LATAM = US$35–55/h</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-background to-muted/50">
              <CardContent className="space-y-4 md:space-y-6 p-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                  <Users className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">Escassez de talentos</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Squads enxutos ou completos, <strong className="text-primary">ajustados ao projeto</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-background to-muted/50 md:col-span-2 xl:col-span-1">
              <CardContent className="space-y-4 md:space-y-6 p-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                  <Shield className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">Governança & compliance</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Contratos claros, SLA e <strong className="text-primary">substituição em até 10 dias</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-background to-muted/50 md:col-span-2 xl:col-span-1">
              <CardContent className="space-y-4 md:space-y-6 p-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                  <Code className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">Foco no core business</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Sua equipe interna se dedica ao <strong className="text-primary">estratégico, não ao operacional</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-gradient-to-br from-muted via-muted/80 to-muted/60 py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              Squads de tecnologia em semanas, com até 40% de redução de custo, 
              sem burocracia e com governança executiva.
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-3">70%</div>
                <p className="text-sm md:text-base text-muted-foreground">contratação mais rápida</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-3">30-40%</div>
                <p className="text-sm md:text-base text-muted-foreground">menos custo total</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-3">100%</div>
                <p className="text-sm md:text-base text-muted-foreground">talentos validados</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-3">LATAM</div>
                <p className="text-sm md:text-base text-muted-foreground">fuso alinhado EUA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Modelos de Engajamento</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <Card className="p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="space-y-4 md:space-y-6 p-0 text-center">
                <h3 className="font-bold text-xl md:text-2xl">Staff Augmentation</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Você gerencia, nós fornecemos devs
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="space-y-4 md:space-y-6 p-0 text-center">
                <h3 className="font-bold text-xl md:text-2xl">Dedicated Team</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Squad completo (PM, Tech Lead, QA, Devs)
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30 bg-gradient-to-br from-background to-muted/30 md:col-span-2 lg:col-span-1 md:mx-auto md:max-w-sm lg:max-w-none">
              <CardContent className="space-y-4 md:space-y-6 p-0 text-center">
                <h3 className="font-bold text-xl md:text-2xl">Project Outsourcing</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Do discovery ao go-live
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outsourcing Deliverables */}
      <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">O que está Incluído no Outsourcing</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparência total e governança executiva para garantir o sucesso do seu projeto
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Reuniões Mensais */}
            <Card className="p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="space-y-6 p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl md:text-3xl">4 Reuniões Mensais</h3>
                    <p className="text-muted-foreground text-lg">1 hora cada - Governança Executiva</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Ata Detalhada</h4>
                      <p className="text-muted-foreground">Registro completo de decisões e ações</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Plano de Ação</h4>
                      <p className="text-muted-foreground">Próximos passos e responsabilidades</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Decisões Técnicas</h4>
                      <p className="text-muted-foreground">Arquitetura e escolhas tecnológicas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Cronograma Atualizado</h4>
                      <p className="text-muted-foreground">Timeline e marcos do projeto</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Relatórios Completos */}
            <Card className="p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="space-y-6 p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl md:text-3xl">Relatórios Completos</h3>
                    <p className="text-muted-foreground text-lg">Transparência total do progresso</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Resumo de Entregas</h4>
                      <p className="text-muted-foreground">Funcionalidades entregues no período</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Roadmap & Tarefas</h4>
                      <p className="text-muted-foreground">Planejamento e execução detalhados</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Bloqueios & Riscos</h4>
                      <p className="text-muted-foreground">Identificação e mitigação proativa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Demonstrações & Prints</h4>
                      <p className="text-muted-foreground">Evidências visuais do progresso</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Burndown/Burnup</h4>
                      <p className="text-muted-foreground">Métricas de velocidade e progresso</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Progresso da Sprint</h4>
                      <p className="text-muted-foreground">Ciclo semanal detalhado</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12 md:mt-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 border border-primary/20">
              <Target className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">Governança Executiva Garantida</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-muted via-muted/80 to-muted/60 py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Como Funciona</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl md:text-2xl mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">1</div>
              <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">Discovery Call (20 min)</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Entendemos suas prioridades</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl md:text-2xl mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">2</div>
              <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">Proposta sob medida</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Squad ou profissional dedicado</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl md:text-2xl mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">3</div>
              <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">Kickoff rápido</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Devs alocados em até 3 semanas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Resultados que entregamos</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="space-y-2 md:space-y-3 p-0">
                <div className="text-3xl md:text-4xl font-bold text-primary">40%</div>
                <p className="text-sm md:text-base text-muted-foreground">de economia média vs in-house</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="space-y-2 md:space-y-3 p-0">
                <div className="text-3xl md:text-4xl font-bold text-primary">&lt; 3</div>
                <p className="text-sm md:text-base text-muted-foreground">semanas de ramp-up</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="space-y-2 md:space-y-3 p-0">
                <div className="text-3xl md:text-4xl font-bold text-primary">&lt; 10%</div>
                <p className="text-sm md:text-base text-muted-foreground">churn rate</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="space-y-2 md:space-y-3 p-0">
                <div className="text-3xl md:text-4xl font-bold text-primary">3+</div>
                <p className="text-sm md:text-base text-muted-foreground">squads em 12 meses</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-hero-bg via-hero-bg/95 to-hero-bg/90 text-hero-foreground py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            Você prefere começar o squad já na próxima sprint ou esperar mais 3 meses e perder velocidade no mercado?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6 md:pt-8">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              onClick={handleWhatsAppClick}
            >
              Agende sua Consultoria Gratuita
              <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
            </Button>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto"
              onClick={handleWhatsAppClick}
            >
              Squad Full
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8 md:py-10">
        <div className="container mx-auto px-4 text-center">
          <img src={currentLogo} alt="Swift Soft" className="h-6 md:h-8 mx-auto mb-4 md:mb-6" />
          <p className="text-sm md:text-base text-muted-foreground">
            © 2024 Swift Soft. Acelere seu roadmap sem inflar headcount.
          </p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;