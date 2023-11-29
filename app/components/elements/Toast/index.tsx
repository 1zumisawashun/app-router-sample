"use client";
import clsx from "clsx";
import {
  PositionOffset,
  Toast as ToastType,
} from "../../../functions/contexts/ToastContext";
import styles from "./styles.module.scss";

// type Position = keyof Pick<ManagedStack, "topCenter" | "bottomCenter">;

type Variant = "information" | "confirmation" | "error";

// type Props = StackNotificationComponentProps<
//   {
//     children?: React.ReactNode;
//     active?: boolean;
//     // milliseconds to hide
//     duration?: number;
//     onHide?: () => void;
//     icon?: React.ReactNode;
//     variant?: Variant;
//   },
//   Position
// >;

type ToastProps = {
  isShow: Boolean;
  toast: ToastType;
  offset: PositionOffset;
  closeToast: () => void;
  focusEvent: {
    setIsShowWithTimeout: () => void;
    resetTimeout: () => void;
  };
};

export const BLOCK_NAME = "spui-Toast";

// Duration for css animation.
export const ANIMATION_DURATION = 300;

const MAX_DURATION = 10000;

export const DISPLAYING_TIMEOUT_DURATION = MAX_DURATION - ANIMATION_DURATION;

export const Toast: React.FC<ToastProps> = ({
  isShow,
  toast: { message },
  offset,
  closeToast,
  focusEvent: { resetTimeout, setIsShowWithTimeout },
}) => {
  const style = {
    // ["--Toast--initial-height" as string]: `${
    //   initialHeight[position.vertical]
    // }px`,
    // ["--Toast--order-offset-top" as string]: `${
    //   orderOffset[position.vertical]
    // }px`,
    // ["--Toast--order-offset-bottom" as string]: `${-orderOffset[
    //   position.vertical
    // ]}px`,
    ["--Toast--offset-top" as string]: `${offset.top}px`,
    ["--Toast--offset-bottom" as string]: `${offset.bottom}px`,
  };

  return (
    <div
      style={style}
      className={clsx(
        styles[`${BLOCK_NAME}`],
        isShow && styles[`${BLOCK_NAME}-slide--in`],
        isShow && styles[`${BLOCK_NAME}--slide`], // shouldAnimation
        !isShow && styles[`${BLOCK_NAME}--hidden`]
      )}
      data-vertical="top"
      aria-hidden={!isShow}
      onTransitionEnd={() => null}
      // ref={(ref) => setClientHeight(ref?.clientHeight || 0)}
    >
      {/* ${BLOCK_NAME}-content--${variant}` */}
      <div
        className={styles[`${BLOCK_NAME}-content`]}
        onMouseOver={resetTimeout}
        onMouseOut={setIsShowWithTimeout}
        onFocus={resetTimeout}
        onBlur={setIsShowWithTimeout}
      >
        {/* {icon && (
          <div className={styles[`${BLOCK_NAME}-contentInfo`]}>{icon}</div>
        )} */}
        <span className={styles[`${BLOCK_NAME}-contentText`]}>{message}</span>
        {/* <div
          className={`${BLOCK_NAME}-iconButton ${BLOCK_NAME}-iconButton--${variant}`}
          onTransitionEnd={(e) => e.stopPropagation()}
        >
          <IconButton
            size="exSmall"
            variant="neutral"
            onClick={handleOnClickCloseButton}
          >
            <CrossBold aria-label="閉じる" />
          </IconButton>
        </div> */}
      </div>
    </div>
  );
};
