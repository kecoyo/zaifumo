export type BulletNodeType = string;

export type EmitOptionsType = {
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  data?: { [key: string]: string };
  speed?: number;
};

class Danmaku {
  static DEFAULT_ROW_HEIGHT = 40;

  static DEFAULT_SPEED = 100;

  static DEFAULT_OPACITY = 1;

  static DEFAULT_GAP_WIDTH = 20;

  // 容器宽度
  width = 0;

  // 容器高度
  height = 0;

  // 弹幕轨道高度
  rowHeight = 40;

  // 弹幕轨道数量
  trackCount = 0;

  // 弹幕速度
  speed = 100;

  // 弹幕透明度 0-1
  opacity = 1;

  // 弹幕之前的最小间隔宽度
  minGapWidth = 0;

  // 是否处于暂停中
  allPaused = false;

  // 是否已被销毁
  isDestroyed = false;

  // 待发送的弹幕队列
  private queue: Array<{
    node: BulletNodeType;
    options?: EmitOptionsType;
  }> = [];

  static containerClassName = 'danmaku-container';

  /**
   * pause
   */
  public pause(): void {
    if (this.allPaused) {
      return;
    }
    this.allPaused = true;
  }

  /**
   * resume
   */
  public resume(): void {
    if (!this.allPaused || this.isDestroyed) {
      return;
    }
    this.allPaused = false;
  }

  /**
   * 获取剩余还没发出的弹幕数量
   */
  public getRestAmount(): number {
    return this.queue.length;
  }

  /**
   * 清空弹幕队列（只能清空排队中还未发出的弹幕）
   */
  public clearQueue(): void {
    this.queue = [];
  }
}

export default Danmaku;
