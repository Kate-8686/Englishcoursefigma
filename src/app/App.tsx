import { motion } from 'motion/react';
import { 
  Plane, 
  Hotel, 
  Coffee, 
  MapPin, 
  AlertCircle, 
  Ticket, 
  Users, 
  Award,
  Star,
  Check,
  MessageCircle,
  Globe,
  Laptop,
  Wifi,
  Calendar,
  Clock,
  Sparkles,
  Target,
  Zap
} from 'lucide-react';
import { ProgramCard } from './components/ProgramCard';
import { FeatureCard } from './components/FeatureCard';

export default function App() {
  const programItems = [
    {
      icon: Plane,
      title: 'Аэропорт без стресса',
      description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
      benefits: 'Уверенность уже в первые часы за границей.'
    },
    {
      icon: Hotel,
      title: 'В отеле: заселение и помощь',
      description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
      benefits: 'Практика вежливых фраз и повседневной лексики.'
    },
    {
      icon: Coffee,
      title: 'Кафе и рестораны',
      description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
      benefits: 'Развитие гастрономического словаря и уверенности в общении.'
    },
    {
      icon: MapPin,
      title: 'На улице: ориентирование и просьбы',
      description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
      benefits: 'Понимание устной речи и произношения в реальных ситуациях.'
    },
    {
      icon: AlertCircle,
      title: 'Экстренные случаи',
      description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
      benefits: 'Важные фразы, которые могут спасти отпуск.'
    },
    {
      icon: Ticket,
      title: 'Туризм и развлечения',
      description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
      benefits: 'Погружение в культурный контекст через язык.'
    },
    {
      icon: Users,
      title: 'Дружба в путешествиях',
      description: 'Как познакомиться с другими детьми или подростками за границей.',
      benefits: 'Игровая практика диалогов и неформального общения.'
    },
    {
      icon: Award,
      title: 'Дипломный проект: «Мой идеальный отпуск»',
      description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
      benefits: 'Развитие связной речи и творческого самовыражения.'
    }
  ];

  const features = [
    { icon: Target, text: 'Акцент на практическую, живую речь, а не на грамматику ради грамматики.' },
    { icon: Globe, text: 'Все ситуации — из реальной жизни путешественника.' },
    { icon: Sparkles, text: 'Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты.' },
    { icon: Star, text: 'Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс.' }
  ];

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1644489640594-d42f4476a0a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBzdW5zZXQlMjBvY2VhbnxlbnwxfHx8fDE3NjYwOTA3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sunset travel"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Набор открыт!</span>
            </div>
            
            <h1 className="mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Курс «Английский для путешествий»
            </h1>
            
            <p className="text-xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
              Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
              в отпуске, поездках и будущих путешествиях!
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToBottom}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-background rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
            >
              Записаться на курс
            </motion.button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Для кого курс */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Для кого курс</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                  <span>4-5 класс</span>
                </div>
              </div>
              <p className="text-muted-foreground">Первая группа для учеников начальной школы</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg">
                  <span>6-8 класс</span>
                </div>
              </div>
              <p className="text-muted-foreground">Вторая группа для учеников средней школы</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Программа курса */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Программа курса</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Всестороннее изучение разговорного английского через реальные ситуации путешествий
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {programItems.map((item, index) => (
              <ProgramCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Почему этот курс особенный */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Почему этот курс особенный?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Технические требования */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Что потребуется</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-card border border-border rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Laptop className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2">Оборудование</h4>
                  <p className="text-muted-foreground text-sm">Стационарный компьютер или ноутбук с наушниками и микрофоном</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-card border border-border rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Wifi className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-2">Интернет</h4>
                  <p className="text-muted-foreground text-sm">Стабильный интернет и Zoom</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Расписание и стоимость */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Расписание */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-8 bg-gradient-to-br from-card to-card/50 border border-border rounded-xl h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h2>Расписание</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg">
                    <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="mb-1">Четверг, 15:00 (МСК)</p>
                      <p className="text-sm text-muted-foreground">Группа 4–5 класс</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg">
                    <Clock className="w-5 h-5 text-secondary mt-1 shrink-0" />
                    <div>
                      <p className="mb-1">Пятница, 15:30 (МСК)</p>
                      <p className="text-sm text-muted-foreground">Группа 6–8 класс</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Стоимость */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-8 bg-gradient-to-br from-card to-card/50 border border-border rounded-xl h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <h2>Стоимость</h2>
                </div>

                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl text-primary">12 000 ₽</span>
                    </div>
                    <p className="text-muted-foreground">Полный курс (10 уроков)</p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-lg">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl text-accent">1 300 ₽</span>
                      <span className="text-muted-foreground">/ урок</span>
                    </div>
                    <p className="text-muted-foreground">Абонемент</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Важная информация */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/30 rounded-xl"
          >
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="mb-2 text-secondary">Группы маленькие — максимум 6 детей</h4>
                <p className="text-foreground/90">Каждый ребёнок получит персональное внимание преподавателя. Места ограничены!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card via-background to-card">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1551903796-4f2dff0f4c51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdHJhdmVsJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc2NjA5MDcxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Travel adventure"
                className="w-full h-64 object-cover rounded-xl opacity-60 mb-8"
              />
            </div>

            <h2 className="mb-6">Готовы начать путешествие в мир английского?</h2>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Запишитесь сейчас — и следующее путешествие станет первым, 
              где ваш ребёнок заговорит по-английски без страха!
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(20, 184, 166, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-primary via-accent to-secondary text-background rounded-xl shadow-2xl shadow-primary/40 text-xl transition-all duration-300"
            >
              Записаться на курс
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Места ограничены</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Набор открыт</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Первое занятие бесплатно</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Английский для путешествий. Открываем мир через язык.
          </p>
        </div>
      </footer>
    </div>
  );
}
