import { FaTelegram } from 'react-icons/fa';
import { BiLogoWhatsappSquare } from 'react-icons/bi';
import styles from '@/pages/contacts/Contacts.module.scss';
import telegram from '@/assets/contacts/telegram.jpg';
import whatsapp from '@/assets/contacts/whatsapp.jpg';

function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className={styles.share_block}>
        <div className={styles.text_block}>
          <a
            href="https://t.me/Batlayy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', margin: '10px 0' }}
          >
            Telegram
          </a>
          <FaTelegram className={styles.telegram} />
        </div>
        <img src={telegram} />
      </div>
      <div className={styles.share_block}>
        <div className={styles.text_block}>
          <a
            // eslint-disable-next-line no-undef
            href={`https://wa.me/+37529${process.env.PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', margin: '10px 0' }}
          >
            WhatsApp
          </a>
          <BiLogoWhatsappSquare className={styles.whatsapp} />
        </div>
        <img src={whatsapp} />
      </div>
    </section>
  );
}

export default Contacts;
