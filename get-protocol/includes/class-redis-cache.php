<?php

namespace GetProtocol\Includes;

class Redis_Cache {

    private $redis;

    public function __construct() {
        if (class_exists('Redis')) {
            $this->redis = new \Redis();
            $this->connect();
        } else {
            $this->redis = null;
        }
    }

    private function connect() {
        try {
            if ($this->redis instanceof \Redis) {
                $this->redis->connect('127.0.0.1', 6379);
            }
        } catch (\Exception $e) {
            $this->redis = null;
        }
    }

    public function set($key, $value, $expiration = 3600) {
        if ($this->redis instanceof \Redis) {
            $this->redis->setex($key, $expiration, $value);
        }
    }

    public function get($key) {
        if ($this->redis instanceof \Redis) {
            return $this->redis->get($key);
        }
        return false;
    }

    public function delete($key) {
        if ($this->redis instanceof \Redis) {
            $this->redis->del($key);
        }
    }
}