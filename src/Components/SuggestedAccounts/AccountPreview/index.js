import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/Components/Button';
import images from '~/Assets/Images';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={images.avatar} alt="Avatar" />

                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>FordFoolish</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>

                <p className={cx('name')}>Lê Tự Huỳnh Duy</p>

                <p className={cx('analytics')}>
                    <strong className={cx('value')}>20.4M </strong>
                    <span className={cx('label')}>Followers </span>
                    <strong className={cx('value')}>20.2M </strong>
                    <span className={cx('label')}>Likes </span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
