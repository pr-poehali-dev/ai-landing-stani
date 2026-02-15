import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <Icon name="ArrowLeft" size={18} />
          На главную
        </Link>

        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          Политика в отношении обработки персональных данных
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              1. Общие положения
            </h2>
            <p>
              Настоящая Политика в отношении обработки персональных данных (далее
              — Политика) разработана в соответствии с Федеральным законом от
              27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок
              обработки персональных данных и меры по обеспечению безопасности
              персональных данных.
            </p>
            <p className="mt-2">
              Оператор персональных данных: ИП Цыбульский Станислав Игоревич,
              ИНН 250212123900, адрес: г. Владивосток, ул. Авроровская 24, кв.
              230.
            </p>
            <p className="mt-2">
              Email для вопросов по обработке персональных данных:{" "}
              <a
                href="mailto:stanislavtsybulskiy03@gmail.com"
                className="text-primary hover:underline"
              >
                stanislavtsybulskiy03@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              2. Какие данные мы собираем
            </h2>
            <p>При использовании сайта мы можем собирать следующие данные:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Имя</li>
              <li>Номер телефона</li>
              <li>Сфера деятельности (ниша бизнеса)</li>
              <li>
                Технические данные (IP-адрес, тип браузера, данные cookies)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              3. Цели обработки персональных данных
            </h2>
            <p>Персональные данные обрабатываются в следующих целях:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Обработка входящих запросов и заявок для оказания услуг
              </li>
              <li>Связь с пользователем по телефону или через мессенджеры</li>
              <li>Улучшение качества обслуживания и работы сайта</li>
              <li>Выполнение требований законодательства РФ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              4. Правовые основания обработки
            </h2>
            <p>Обработка персональных данных осуществляется на основании:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Согласия субъекта персональных данных на обработку его
                персональных данных (п. 1 ч. 1 ст. 6 152-ФЗ)
              </li>
              <li>
                Необходимости исполнения договора, стороной которого является
                субъект персональных данных (п. 5 ч. 1 ст. 6 152-ФЗ)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              5. Порядок обработки персональных данных
            </h2>
            <p>
              Оператор обеспечивает сохранность персональных данных и принимает
              все возможные меры, исключающие доступ к персональным данным
              неуполномоченных лиц.
            </p>
            <p className="mt-2">
              Персональные данные пользователя никогда, ни при каких условиях не
              будут переданы третьим лицам, за исключением случаев, связанных с
              исполнением действующего законодательства, либо в случае, если
              субъектом персональных данных дано согласие на их передачу.
            </p>
            <p className="mt-2">
              Срок хранения персональных данных — до момента отзыва согласия
              субъектом персональных данных либо до момента достижения целей
              обработки.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              6. Права субъекта персональных данных
            </h2>
            <p>Пользователь имеет право:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Получить информацию, касающуюся обработки его персональных данных
              </li>
              <li>
                Требовать уточнения, блокирования или уничтожения своих
                персональных данных
              </li>
              <li>
                Отозвать согласие на обработку персональных данных, направив
                письменное заявление на email:{" "}
                <a
                  href="mailto:stanislavtsybulskiy03@gmail.com"
                  className="text-primary hover:underline"
                >
                  stanislavtsybulskiy03@gmail.com
                </a>
              </li>
              <li>
                Обжаловать действия или бездействие Оператора в Роскомнадзор или
                в судебном порядке
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              7. Файлы cookie
            </h2>
            <p>
              Сайт может использовать файлы cookie для улучшения
              пользовательского опыта. Пользователь может отключить cookie в
              настройках браузера, однако это может повлиять на
              работоспособность сайта.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              8. Заключительные положения
            </h2>
            <p>
              Оператор вправе вносить изменения в настоящую Политику. Новая
              редакция Политики вступает в силу с момента её размещения на сайте.
            </p>
            <p className="mt-2">
              Дата последнего обновления: 15 февраля 2026 г.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;