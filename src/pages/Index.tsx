import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="border-b border-purple-200 bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Droplets" size={28} className="text-white" />
              <h1 className="text-2xl font-bold text-white">AquaPure</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-white hover:text-yellow-300 transition-colors font-medium"
              >
                Главная
              </a>
              <a
                href="#products"
                className="text-white hover:text-yellow-300 transition-colors font-medium"
              >
                Продукция
              </a>
              <a
                href="#about"
                className="text-white hover:text-yellow-300 transition-colors font-medium"
              >
                О компании
              </a>
              <a
                href="#contacts"
                className="text-white hover:text-yellow-300 transition-colors font-medium"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 shadow-lg">
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Чистая минеральная вода
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                высшего качества
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Природная минеральная столовая вода из экологически чистых
              источников. Сертифицирована и проверена в лабораториях.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg transform hover:scale-105 transition-all"
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Заказать воду
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg transform hover:scale-105 transition-all"
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Сертификаты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Наша продукция
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Широкий ассортимент минеральной воды различного объема для дома и
              офиса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-2xl transition-all transform hover:scale-105 bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Icon name="Droplets" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-purple-800">
                  AquaPure 0.5л
                </CardTitle>
                <CardDescription className="text-purple-600">
                  Удобная бутылка для повседневного использования
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    45 ₽
                  </div>
                  <div className="flex justify-center space-x-2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      Столовая
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      pH 7.2
                    </Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg transform hover:scale-105 transition-all">
                    <Icon name="Plus" size={16} className="mr-2" />В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all transform hover:scale-105 bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Icon name="Droplets" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-orange-800">
                  AquaPure 1.5л
                </CardTitle>
                <CardDescription className="text-orange-600">
                  Идеальный размер для семьи
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    89 ₽
                  </div>
                  <div className="flex justify-center space-x-2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      Столовая
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      pH 7.2
                    </Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white shadow-lg transform hover:scale-105 transition-all">
                    <Icon name="Plus" size={16} className="mr-2" />В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all transform hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Icon name="Droplets" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-blue-800">
                  AquaPure 19л
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Для кулеров и офисов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    450 ₽
                  </div>
                  <div className="flex justify-center space-x-2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      Столовая
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      pH 7.2
                    </Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transform hover:scale-105 transition-all">
                    <Icon name="Plus" size={16} className="mr-2" />В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Качество и безопасность
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наша вода проходит многоступенчатую очистку и контроль качества
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Сертификаты качества
              </h4>
              <p className="text-gray-600">
                Все необходимые разрешения и сертификаты соответствия ГОСТ
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Icon name="FlaskConical" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Лабораторные анализы
              </h4>
              <p className="text-gray-600">
                Регулярные проверки состава и качества воды в аккредитованных
                лабораториях
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Контроль производства
              </h4>
              <p className="text-gray-600">
                Строгий контроль на всех этапах производства и упаковки
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Доставка и логистика
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Быстрая и надежная доставка по всему городу
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Truck" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Бесплатная доставка
                    </h4>
                    <p className="text-gray-600">
                      При заказе от 500 рублей доставка по городу бесплатная
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Быстрая доставка
                    </h4>
                    <p className="text-gray-600">
                      Доставка в течение 2-4 часов после оформления заказа
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Широкая география
                    </h4>
                    <p className="text-gray-600">
                      Доставляем во все районы города и ближайшие населенные
                      пункты
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl p-8 border-2 border-orange-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Заказать доставку
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-orange-200">
                  <span className="text-orange-700">Минимальный заказ</span>
                  <span className="font-bold text-orange-800">300 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-orange-200">
                  <span className="text-orange-700">Стоимость доставки</span>
                  <span className="font-bold text-orange-800">150 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-orange-700">Время доставки</span>
                  <span className="font-bold text-orange-800">2-4 часа</span>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg transform hover:scale-105 transition-all mt-6"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать сейчас
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              О компании AquaPure
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Мы занимаемся поставкой качественной минеральной воды уже более 10
              лет. Наша миссия — обеспечить каждого человека доступом к чистой и
              полезной воде.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  10+
                </div>
                <div className="text-purple-700 font-medium">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  5000+
                </div>
                <div className="text-blue-700 font-medium">
                  довольных клиентов
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-orange-700 font-medium">
                  работаем для вас
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section
        id="contacts"
        className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h3>
            <p className="text-gray-600">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 hover:shadow-xl transition-all">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Телефон
              </h4>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
              <p className="text-gray-600">+7 (800) 123-45-67</p>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 hover:shadow-xl transition-all">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Email
              </h4>
              <p className="text-gray-600">info@aquapure.ru</p>
              <p className="text-gray-600">order@aquapure.ru</p>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-white to-green-50 border-2 border-green-200 hover:shadow-xl transition-all">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Адрес
              </h4>
              <p className="text-gray-600">г. Москва</p>
              <p className="text-gray-600">ул. Водная, 123</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Droplets" size={28} className="text-white" />
                <h4 className="text-xl font-bold">AquaPure</h4>
              </div>
              <p className="text-gray-400">
                Чистая минеральная вода высшего качества для вашего здоровья
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Продукция</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    Вода 0.5л
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    Вода 1.5л
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    Вода 19л
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    Сертификаты
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    Вакансии
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@aquapure.ru</li>
                <li>г. Москва, ул. Водная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AquaPure. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
